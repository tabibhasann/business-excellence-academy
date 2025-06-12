// Global variables
let currentCourse = null;
let currentChapter = 0;
let currentQuiz = 0;
let currentFlashcard = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    initializeNavigation();
    renderCourses();
    updateProgressDisplay();
    updateHeroStats();
});

// Navigation functionality
function initializeNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Course rendering
function renderCourses() {
    const coursesGrid = document.getElementById('courses-grid');
    coursesGrid.innerHTML = '';

    Object.values(coursesData).forEach(course => {
        const progress = userProgress.courses[course.id];
        const progressPercentage = Math.round((progress.completedChapters.length / course.chapters.length) * 100);
        
        const courseCard = document.createElement('div');
        courseCard.className = `course-card course-${course.id}`;
        courseCard.style.setProperty('--course-color', course.color);
        
        courseCard.innerHTML = `
            <div class="course-icon">
                <i class="${course.icon}"></i>
            </div>
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <span><i class="fas fa-clock"></i> ${course.duration}</span>
                <span><i class="fas fa-book"></i> ${course.lessons} lessons</span>
            </div>
            <div class="course-progress">
                <div class="course-progress-bar" style="width: ${progressPercentage}%"></div>
            </div>
            <div class="course-status">
                <span class="status-badge ${getStatusClass(progress.status)}">${getStatusText(progress.status)}</span>
                <span>${progressPercentage}% Complete</span>
            </div>
        `;
        
        courseCard.addEventListener('click', () => openCourse(course.id));
        coursesGrid.appendChild(courseCard);
    });
}

function getStatusClass(status) {
    switch(status) {
        case 'completed': return 'status-completed';
        case 'in-progress': return 'status-in-progress';
        default: return 'status-not-started';
    }
}

function getStatusText(status) {
    switch(status) {
        case 'completed': return 'Completed';
        case 'in-progress': return 'In Progress';
        default: return 'Not Started';
    }
}

// Course modal functionality
function openCourse(courseId) {
    currentCourse = courseId;
    currentChapter = 0;
    
    const course = coursesData[courseId];
    const modal = document.getElementById('course-modal');
    const title = document.getElementById('modal-course-title');
    
    title.textContent = course.title;
    
    renderCourseNavigation(course);
    loadChapter(0);
    updateCourseProgress();
    
    modal.style.display = 'block';
    
    if (userProgress.courses[courseId].status === 'not-started') {
        userProgress.courses[courseId].status = 'in-progress';
        saveProgress();
    }
}

function closeCourseModal() {
    document.getElementById('course-modal').style.display = 'none';
    renderCourses();
    updateProgressDisplay();
}

function renderCourseNavigation(course) {
    const navigation = document.getElementById('course-navigation');
    navigation.innerHTML = '';
    
    course.chapters.forEach((chapter, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.textContent = `${index + 1}. ${chapter.title}`;
        
        const isCompleted = userProgress.courses[course.id].completedChapters.includes(index);
        if (isCompleted) {
            navItem.classList.add('completed');
        }
        if (index === currentChapter) {
            navItem.classList.add('active');
        }
        
        navItem.addEventListener('click', () => loadChapter(index));
        navigation.appendChild(navItem);
    });
}

function loadChapter(chapterIndex) {
    currentChapter = chapterIndex;
    const course = coursesData[currentCourse];
    const chapter = course.chapters[chapterIndex];
    
    document.getElementById('course-content-area').innerHTML = chapter.content;
    
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.classList.toggle('active', index === chapterIndex);
    });
    
    const prevBtn = document.getElementById('prev-lesson');
    const nextBtn = document.getElementById('next-lesson');
    
    prevBtn.disabled = chapterIndex === 0;
    nextBtn.textContent = chapterIndex === course.chapters.length - 1 ? 'Complete' : 'Next';
    
    updateCourseProgress();
}

function previousLesson() {
    if (currentChapter > 0) {
        loadChapter(currentChapter - 1);
    }
}

function nextLesson() {
    const course = coursesData[currentCourse];
    const progress = userProgress.courses[currentCourse];
    
    if (!progress.completedChapters.includes(currentChapter)) {
        progress.completedChapters.push(currentChapter);
        progress.timeSpent += 10;
        
        if (progress.completedChapters.length === course.chapters.length) {
            progress.status = 'completed';
            showAchievement(`Completed ${course.title}!`);
        }
        
        saveProgress();
    }
    
    if (currentChapter < course.chapters.length - 1) {
        loadChapter(currentChapter + 1);
    } else {
        closeCourseModal();
    }
}

function updateCourseProgress() {
    const course = coursesData[currentCourse];
    const progress = userProgress.courses[currentCourse];
    const percentage = Math.round((progress.completedChapters.length / course.chapters.length) * 100);
    
    const circle = document.getElementById('modal-progress-circle');
    const text = document.getElementById('modal-progress-percent');
    const progressText = document.getElementById('modal-progress-text');
    
    const circumference = 2 * Math.PI * 25;
    const offset = circumference - (percentage / 100) * circumference;
    
    circle.style.strokeDashoffset = offset;
    text.textContent = `${percentage}%`;
    
    if (percentage === 0) {
        progressText.textContent = 'Start your journey';
    } else if (percentage === 100) {
        progressText.textContent = 'Course completed!';
    } else {
        progressText.textContent = `${progress.completedChapters.length} of ${course.chapters.length} lessons`;
    }
}

// Progress display updates
function updateProgressDisplay() {
    const totalCourses = Object.keys(coursesData).length;
    const completedCourses = Object.values(userProgress.courses).filter(c => c.status === 'completed').length;
    const overallProgress = Math.round((completedCourses / totalCourses) * 100);
    
    const circle = document.getElementById('overall-progress-circle');
    const text = document.getElementById('overall-progress-text');
    
    if (circle && text) {
        const circumference = 2 * Math.PI * 52;
        const offset = circumference - (overallProgress / 100) * circumference;
        
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = offset;
        text.textContent = `${overallProgress}%`;
    }
    
    document.getElementById('completed-courses').textContent = completedCourses;
    document.getElementById('streak-days').textContent = userProgress.streak;
    document.getElementById('badges-earned').textContent = userProgress.badges.length;
    
    renderCourseProgressList();
}

function renderCourseProgressList() {
    const container = document.getElementById('course-progress-list');
    if (!container) return;
    
    container.innerHTML = '<h3 style="margin-bottom: 20px;">Course Progress</h3>';
    
    Object.values(coursesData).forEach(course => {
        const progress = userProgress.courses[course.id];
        const percentage = Math.round((progress.completedChapters.length / course.chapters.length) * 100);
        
        const item = document.createElement('div');
        item.className = 'progress-item';
        item.innerHTML = `
            <div class="progress-info">
                <div class="progress-course-title">${course.title}</div>
                <div class="progress-course-subtitle">${progress.completedChapters.length} of ${course.chapters.length} lessons</div>
            </div>
            <div class="progress-percentage">${percentage}%</div>
        `;
        
        container.appendChild(item);
    });
}

function updateHeroStats() {
    const totalCourses = Object.keys(coursesData).length;
    const completedCourses = Object.values(userProgress.courses).filter(c => c.status === 'completed').length;
    const completionRate = Math.round((completedCourses / totalCourses) * 100);
    const totalTime = Object.values(userProgress.courses).reduce((sum, course) => sum + course.timeSpent, 0);
    
    document.getElementById('completion-rate').textContent = `${completionRate}%`;
    document.getElementById('time-spent').textContent = `${Math.round(totalTime / 60)}h`;
}

// Quiz functionality
function openQuizModal() {
    const modal = document.getElementById('quiz-modal');
    currentQuiz = 0;
    loadQuizQuestion();
    modal.style.display = 'block';
}

function closeQuizModal() {
    document.getElementById('quiz-modal').style.display = 'none';
}

function loadQuizQuestion() {
    if (currentQuiz >= quizQuestions.length) {
        document.getElementById('quiz-content').innerHTML = `
            <div style="padding: 40px; text-align: center;">
                <h2>Quiz Completed!</h2>
                <p>Great job! You've completed the quiz.</p>
                <button class="btn btn-primary" onclick="closeQuizModal()">Close</button>
            </div>
        `;
        return;
    }
    
    const question = quizQuestions[currentQuiz];
    document.getElementById('quiz-content').innerHTML = `
        <div style="padding: 40px;">
            <div class="quiz-question">
                <h3>Question ${currentQuiz + 1} of ${quizQuestions.length}</h3>
                <p>${question.question}</p>
            </div>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectQuizOption(${index})" data-index="${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="submitQuizAnswer()" id="quiz-submit" disabled>Submit Answer</button>
        </div>
    `;
}

function selectQuizOption(index) {
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    document.querySelector(`[data-index="${index}"]`).classList.add('selected');
    document.getElementById('quiz-submit').disabled = false;
}

function submitQuizAnswer() {
    const selected = document.querySelector('.quiz-option.selected');
    if (!selected) return;
    
    const selectedIndex = parseInt(selected.dataset.index);
    const question = quizQuestions[currentQuiz];
    const isCorrect = selectedIndex === question.correct;
    
    document.querySelectorAll('.quiz-option').forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    const resultDiv = document.createElement('div');
    resultDiv.className = `quiz-result ${isCorrect ? 'correct' : 'incorrect'}`;
    resultDiv.innerHTML = `
        <p><strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong></p>
        <p>${question.explanation}</p>
        <button class="btn btn-primary" onclick="nextQuizQuestion()">
            ${currentQuiz === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
    `;
    
    document.getElementById('quiz-content').appendChild(resultDiv);
    document.getElementById('quiz-submit').style.display = 'none';
}

function nextQuizQuestion() {
    currentQuiz++;
    loadQuizQuestion();
}

// Flashcards functionality
function openFlashcardsModal() {
    const modal = document.getElementById('flashcards-modal');
    currentFlashcard = 0;
    loadFlashcard();
    modal.style.display = 'block';
}

function closeFlashcardsModal() {
    document.getElementById('flashcards-modal').style.display = 'none';
}

function loadFlashcard() {
    if (flashcards.length === 0) return;
    
    const flashcard = flashcards[currentFlashcard];
    document.getElementById('flashcard-container').innerHTML = `
        <div class="flashcard" onclick="flipCard()" id="current-flashcard">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <h3>${flashcard.front}</h3>
                    <p><small>Click to reveal answer</small></p>
                </div>
                <div class="flashcard-back">
                    <h3>${flashcard.back}</h3>
                    <p><small>Click to go back</small></p>
                </div>
            </div>
        </div>
        <div class="flashcard-controls">
            <div class="flashcard-navigation">
                <button class="btn btn-secondary" onclick="previousFlashcard()" ${currentFlashcard === 0 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-left"></i> Previous
                </button>
                <span>${currentFlashcard + 1} of ${flashcards.length}</span>
                <button class="btn btn-secondary" onclick="nextFlashcard()" ${currentFlashcard === flashcards.length - 1 ? 'disabled' : ''}>
                    Next <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <p><small>Course: ${flashcard.course.toUpperCase()}</small></p>
        </div>
    `;
}

function flipCard() {
    document.getElementById('current-flashcard').classList.toggle('flipped');
}

function previousFlashcard() {
    if (currentFlashcard > 0) {
        currentFlashcard--;
        loadFlashcard();
    }
}

function nextFlashcard() {
    if (currentFlashcard < flashcards.length - 1) {
        currentFlashcard++;
        loadFlashcard();
    }
}

// Other modal functions
function openScenarioModal() {
    const modal = document.getElementById('scenario-modal');
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    
    document.getElementById('scenario-content').innerHTML = `
        <div style="padding: 40px;">
            <h2>${scenario.title}</h2>
            <p style="margin-bottom: 30px; font-size: 1.1rem; line-height: 1.6;">${scenario.description}</p>
            
            <h3>What would you do?</h3>
            <div class="quiz-options">
                ${scenario.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectScenarioOption(${index})" data-index="${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="submitScenarioAnswer(${scenario.correct}, '${scenario.explanation}')" id="scenario-submit" disabled>Submit Answer</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeScenarioModal() {
    document.getElementById('scenario-modal').style.display = 'none';
}

function selectScenarioOption(index) {
    document.querySelectorAll('#scenario-content .quiz-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    document.querySelector(`#scenario-content [data-index="${index}"]`).classList.add('selected');
    document.getElementById('scenario-submit').disabled = false;
}

function submitScenarioAnswer(correctIndex, explanation) {
    const selected = document.querySelector('#scenario-content .quiz-option.selected');
    if (!selected) return;
    
    const selectedIndex = parseInt(selected.dataset.index);
    const isCorrect = selectedIndex === correctIndex;
    
    document.querySelectorAll('#scenario-content .quiz-option').forEach((option, index) => {
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    const resultDiv = document.createElement('div');
    resultDiv.className = `quiz-result ${isCorrect ? 'correct' : 'incorrect'}`;
    resultDiv.innerHTML = `
        <p><strong>${isCorrect ? 'Excellent choice!' : 'Not quite right'}</strong></p>
        <p>${explanation}</p>
        <button class="btn btn-primary" onclick="openScenarioModal()">Try Another Scenario</button>
        <button class="btn btn-secondary" onclick="closeScenarioModal()">Close</button>
    `;
    
    document.getElementById('scenario-content').appendChild(resultDiv);
    document.getElementById('scenario-submit').style.display = 'none';
}

function openAssessmentModal() {
    const modal = document.getElementById('assessment-modal');
    modal.style.display = 'block';
    
    document.getElementById('assessment-content').innerHTML = `
        <div style="padding: 40px; text-align: center;">
            <h2>Comprehensive Assessment</h2>
            <p style="margin-bottom: 30px;">Test your knowledge across all business management frameworks.</p>
            <div style="background: #f8fafc; padding: 30px; border-radius: 15px; margin: 20px 0;">
                <h3>Assessment Features:</h3>
                <ul style="text-align: left; max-width: 400px; margin: 0 auto;">
                    <li>50 questions covering all courses</li>
                    <li>Mixed difficulty levels</li>
                    <li>Time limit: 60 minutes</li>
                    <li>Detailed feedback and recommendations</li>
                    <li>Performance analytics</li>
                </ul>
            </div>
            <p><strong>Prerequisites:</strong> Complete at least 3 courses to unlock assessment</p>
            <button class="btn btn-primary" onclick="startAssessment()">Start Assessment</button>
            <button class="btn btn-secondary" onclick="closeAssessmentModal()">Close</button>
        </div>
    `;
}

function closeAssessmentModal() {
    document.getElementById('assessment-modal').style.display = 'none';
}

function startAssessment() {
    const completedCourses = Object.values(userProgress.courses).filter(c => c.status === 'completed').length;
    
    if (completedCourses < 3) {
        alert('Please complete at least 3 courses before taking the assessment.');
        return;
    }
    
    document.getElementById('assessment-content').innerHTML = `
        <div style="padding: 40px; text-align: center;">
            <h2>Assessment Coming Soon!</h2>
            <p>The comprehensive assessment feature will be available when you complete more courses.</p>
            <button class="btn btn-primary" onclick="closeAssessmentModal()">Close</button>
        </div>
    `;
}

// Achievement system
function showAchievement(text) {
    const toast = document.getElementById('achievement-toast');
    const achievementText = document.getElementById('achievement-text');
    
    achievementText.textContent = text;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
    
    if (!userProgress.badges.includes(text)) {
        userProgress.badges.push(text);
        saveProgress();
    }
}

// Modal click outside to close
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

// Add CSS for flashcard flipping
const flashcardStyles = `
.flashcard {
    width: 400px;
    height: 250px;
    margin: 40px auto;
    perspective: 1000px;
}

.flashcard-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;
}

.flashcard.flipped .flashcard-inner {
    transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.flashcard-front {
    background: #3b82f6;
    color: white;
}

.flashcard-back {
    background: white;
    color: #1a202c;
    transform: rotateY(180deg);
    border: 2px solid #e2e8f0;
}

.flashcard-controls {
    text-align: center;
    margin-top: 30px;
}

.flashcard-navigation {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    align-items: center;
}

.quiz-option {
    padding: 15px 20px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    margin-bottom: 10px;
}

.quiz-option:hover {
    border-color: #3b82f6;
    background: #f0f9ff;
}

.quiz-option.selected {
    border-color: #3b82f6;
    background: #3b82f6;
    color: white;
}

.quiz-option.correct {
    border-color: #16a34a;
    background: #16a34a;
    color: white;
}

.quiz-option.incorrect {
    border-color: #dc2626;
    background: #dc2626;
    color: white;
}

.quiz-result {
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    font-weight: 600;
}

.quiz-result.correct {
    background: #dcfce7;
    color: #16a34a;
}

.quiz-result.incorrect {
    background: #fee2e2;
    color: #dc2626;
}

@media (max-width: 768px) {
    .flashcard {
        width: 300px;
        height: 200px;
    }
}
`;

// Add the styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = flashcardStyles;
document.head.appendChild(styleSheet); 