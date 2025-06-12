// Course Data - Organized from Business Management Files
const coursesData = {
    'agile': {
        id: 'agile',
        title: 'Agile Methodology Mastery',
        icon: 'fas fa-rocket',
        description: 'Master adaptive delivery with Agile principles, values, and practices for uncertain environments.',
        duration: '4-6 hours',
        lessons: 6,
        color: '#3b82f6',
        priority: 'HIGH',
        category: 'Project Management',
        chapters: [
            {
                title: 'Agile Foundations',
                content: `
                    <h1>Agile Methodology Foundations</h1>
                    
                    <h2>Core Agile Principles (The Manifesto)</h2>
                    <p>The Agile Manifesto defines four fundamental values:</p>
                    <ol>
                        <li><strong>Individuals and interactions</strong> over processes and tools</li>
                        <li><strong>Working software/solutions</strong> over comprehensive documentation</li>
                        <li><strong>Customer collaboration</strong> over contract negotiation</li>
                        <li><strong>Responding to change</strong> over following a plan</li>
                    </ol>
                    
                    <h2>12 Agile Principles Deep Dive</h2>
                    <ul>
                        <li>Customer satisfaction through early/continuous delivery</li>
                        <li>Welcome changing requirements</li>
                        <li>Deliver working solutions frequently (2-4 weeks)</li>
                        <li>Business people and developers collaborate daily</li>
                        <li>Build projects around motivated individuals</li>
                        <li>Face-to-face conversation is most efficient</li>
                        <li>Working software/solutions = primary measure of progress</li>
                        <li>Sustainable development pace</li>
                        <li>Technical excellence and good design</li>
                        <li>Simplicity - maximize work NOT done</li>
                        <li>Self-organizing teams</li>
                        <li>Regular reflection and adaptation</li>
                    </ul>
                `
            },
            {
                title: 'Agile Roles & Responsibilities',
                content: `
                    <h1>Agile Team Structure</h1>
                    
                    <h2>Key Roles</h2>
                    <h3>Product Owner</h3>
                    <ul>
                        <li>Vision and roadmap development</li>
                        <li>Backlog management and prioritization</li>
                        <li>Stakeholder liaison</li>
                        <li>Value maximization</li>
                    </ul>
                    
                    <h3>Development Team</h3>
                    <ul>
                        <li>Cross-functional capabilities</li>
                        <li>Self-organizing structure</li>
                        <li>Delivering working increments</li>
                        <li>Continuous improvement</li>
                    </ul>
                    
                    <h3>Scrum Master/Agile Coach</h3>
                    <ul>
                        <li>Process facilitation</li>
                        <li>Impediment removal</li>
                        <li>Team coaching</li>
                        <li>Process improvement guidance</li>
                    </ul>
                `
            },
            {
                title: 'Agile Artifacts',
                content: `
                    <h1>Essential Agile Artifacts</h1>
                    
                    <h2>Product Vision & Roadmap</h2>
                    <p>Strategic direction and long-term planning for product development.</p>
                    
                    <h2>Product Backlog</h2>
                    <p>Prioritized list of features, requirements, and improvements.</p>
                    
                    <h2>User Stories</h2>
                    <p>Format: "As a [user type], I want [goal] so that [benefit]"</p>
                    <ul>
                        <li>Should be independent</li>
                        <li>Negotiable in scope</li>
                        <li>Valuable to users</li>
                        <li>Estimable in effort</li>
                        <li>Small enough to complete</li>
                        <li>Testable with clear criteria</li>
                    </ul>
                    
                    <h2>Definition of Done</h2>
                    <p>Clear, measurable criteria that work must meet before being considered complete.</p>
                `
            },
            {
                title: 'Agile Planning',
                content: `
                    <h1>Agile Planning Practices</h1>
                    
                    <h2>Release Planning</h2>
                    <p>High-level planning for product releases, typically 3-6 months ahead.</p>
                    
                    <h2>Sprint/Iteration Planning</h2>
                    <p>Detailed planning for short development cycles (1-4 weeks).</p>
                    
                    <h2>Daily Planning</h2>
                    <p>Quick synchronization and obstacle identification through daily standups.</p>
                    
                    <h2>Estimation Techniques</h2>
                    <ul>
                        <li><strong>Story Points</strong>: Relative sizing using Fibonacci sequence</li>
                        <li><strong>T-shirt Sizing</strong>: XS, S, M, L, XL categories</li>
                        <li><strong>Planning Poker</strong>: Team-based estimation game</li>
                    </ul>
                `
            },
            {
                title: 'Agile Ceremonies',
                content: `
                    <h1>Agile Ceremonies and Events</h1>
                    
                    <h2>Sprint Planning</h2>
                    <p>Team collaborates to select work for upcoming sprint and create execution plan.</p>
                    
                    <h2>Daily Standup</h2>
                    <p>15-minute daily synchronization meeting covering:</p>
                    <ul>
                        <li>What did I accomplish yesterday?</li>
                        <li>What will I work on today?</li>
                        <li>What obstacles are in my way?</li>
                    </ul>
                    
                    <h2>Sprint Review</h2>
                    <p>Demonstration of completed work to stakeholders for feedback.</p>
                    
                    <h2>Sprint Retrospective</h2>
                    <p>Team reflection on process improvements:</p>
                    <ul>
                        <li>What went well?</li>
                        <li>What could be improved?</li>
                        <li>What will we commit to change?</li>
                    </ul>
                `
            },
            {
                title: 'Agile Metrics & Improvement',
                content: `
                    <h1>Measuring Agile Success</h1>
                    
                    <h2>Key Metrics</h2>
                    <h3>Velocity</h3>
                    <p>Amount of work completed per sprint, measured in story points.</p>
                    
                    <h3>Burndown Charts</h3>
                    <p>Visual representation of work remaining versus time.</p>
                    
                    <h3>Cycle Time</h3>
                    <p>Time from work start to completion.</p>
                    
                    <h3>Customer Satisfaction</h3>
                    <p>Feedback on delivered value and quality.</p>
                    
                    <h2>Continuous Improvement</h2>
                    <ul>
                        <li>Regular retrospectives</li>
                        <li>Experiment with new practices</li>
                        <li>Measure and adapt</li>
                        <li>Share learnings across teams</li>
                    </ul>
                `
            }
        ]
    },
    
    'scrum': {
        id: 'scrum',
        title: 'Scrum Framework Excellence',
        icon: 'fas fa-users',
        description: 'Master structured team coordination with Scrum roles, events, and artifacts.',
        duration: '3-4 hours',
        lessons: 5,
        color: '#14b8a6',
        priority: 'HIGH',
        category: 'Project Management',
        chapters: [
            {
                title: 'Scrum Framework Overview',
                content: `
                    <h1>The Scrum Framework</h1>
                    
                    <h2>Scrum Definition</h2>
                    <p>Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.</p>
                    
                    <h2>Scrum Values</h2>
                    <ul>
                        <li><strong>Commitment</strong>: Dedicate to achieving team goals</li>
                        <li><strong>Courage</strong>: Do the right thing and work on tough problems</li>
                        <li><strong>Focus</strong>: Concentrate on sprint work and team goals</li>
                        <li><strong>Openness</strong>: Open about work and challenges</li>
                        <li><strong>Respect</strong>: Respect each other's capabilities and differences</li>
                    </ul>
                    
                    <h2>Scrum Theory</h2>
                    <p>Scrum is founded on empirical process control theory (empiricism), which asserts that knowledge comes from experience and making decisions based on what is known.</p>
                `
            },
            {
                title: 'Scrum Events',
                content: `
                    <h1>Scrum Events (Ceremonies)</h1>
                    
                    <h2>The Sprint</h2>
                    <p>Time-boxed iteration of 1-4 weeks where a potentially shippable product increment is created.</p>
                    
                    <h2>Sprint Planning (4-8 hours for 2-4 week sprint)</h2>
                    <p>Collaborative event where the team plans the work to be performed during the sprint.</p>
                    <ul>
                        <li>What can be delivered in the upcoming sprint?</li>
                        <li>How will the chosen work be achieved?</li>
                    </ul>
                    
                    <h2>Daily Scrum (15 minutes daily)</h2>
                    <p>Daily inspection and adaptation event for the development team.</p>
                    <ul>
                        <li>What did I do yesterday that helped achieve the sprint goal?</li>
                        <li>What will I do today to help achieve the sprint goal?</li>
                        <li>Do I see any impediment that prevents me or the team from achieving the sprint goal?</li>
                    </ul>
                    
                    <h2>Sprint Review</h2>
                    <p>Inspection of the increment and adaptation of the product backlog.</p>
                    <ul>
                        <li>Demonstrate completed work</li>
                        <li>Gather stakeholder feedback</li>
                        <li>Adapt product backlog based on feedback</li>
                    </ul>
                    
                    <h2>Sprint Retrospective</h2>
                    <p>Opportunity for the Scrum team to inspect itself and plan for improvements.</p>
                    <ul>
                        <li>What went well during the sprint?</li>
                        <li>What could be improved?</li>
                        <li>What will we commit to improve in the next sprint?</li>
                    </ul>
                `
            },
            {
                title: 'Scrum Artifacts',
                content: `
                    <h1>Scrum Artifacts</h1>
                    
                    <h2>Product Backlog</h2>
                    <p>Ordered list of features, functions, requirements, enhancements, and fixes that constitute changes to the product.</p>
                    <ul>
                        <li>Product Owner responsibility</li>
                        <li>Continuously refined and prioritized</li>
                        <li>Single source of requirements</li>
                        <li>Never complete - evolves with product</li>
                    </ul>
                    
                    <h2>Sprint Backlog</h2>
                    <p>Set of product backlog items selected for the sprint plus a plan for delivering them.</p>
                    <ul>
                        <li>Development team ownership</li>
                        <li>Forecast of functionality</li>
                        <li>Plan for delivering functionality</li>
                        <li>Visible to everyone</li>
                    </ul>
                    
                    <h2>Product Increment</h2>
                    <p>Sum of all product backlog items completed during a sprint plus previous sprints.</p>
                    <ul>
                        <li>Must be potentially shippable</li>
                        <li>Meets Definition of Done</li>
                        <li>Cumulative work of all sprints</li>
                        <li>Inspected at Sprint Review</li>
                    </ul>
                `
            },
            {
                title: 'Scrum Roles Deep Dive',
                content: `
                    <h1>Scrum Roles and Responsibilities</h1>
                    
                    <h2>Product Owner</h2>
                    <p>Responsible for maximizing the value of the product and the work of the development team.</p>
                    <ul>
                        <li>Clearly expressing product backlog items</li>
                        <li>Ordering items in the product backlog</li>
                        <li>Optimizing the value of work performed</li>
                        <li>Ensuring backlog is visible and understood</li>
                        <li>Ensuring development team understands items</li>
                    </ul>
                    
                    <h2>Development Team</h2>
                    <p>Professionals who deliver a potentially releasable increment each sprint.</p>
                    <ul>
                        <li>Self-organizing</li>
                        <li>Cross-functional</li>
                        <li>No titles other than Developer</li>
                        <li>Accountable as a whole</li>
                        <li>Size of 3-9 people</li>
                    </ul>
                    
                    <h2>Scrum Master</h2>
                    <p>Responsible for promoting and supporting Scrum by helping everyone understand theory, practices, rules, and values.</p>
                    <ul>
                        <li>Coaching the team in self-organization</li>
                        <li>Helping the team create high-value products</li>
                        <li>Removing impediments to progress</li>
                        <li>Facilitating Scrum events</li>
                        <li>Coaching the organization in Scrum adoption</li>
                    </ul>
                `
            },
            {
                title: 'Scrum Implementation',
                content: `
                    <h1>Implementing Scrum Successfully</h1>
                    
                    <h2>Getting Started</h2>
                    <ul>
                        <li>Form cross-functional team</li>
                        <li>Identify Product Owner and Scrum Master</li>
                        <li>Create initial product backlog</li>
                        <li>Plan first sprint</li>
                        <li>Establish Definition of Done</li>
                    </ul>
                    
                    <h2>Common Challenges</h2>
                    <h3>Incomplete User Stories</h3>
                    <p>Solution: Invest time in proper backlog refinement</p>
                    
                    <h3>Scope Creep</h3>
                    <p>Solution: Protect sprint commitment, add new items to product backlog</p>
                    
                    <h3>Poor Communication</h3>
                    <p>Solution: Emphasize face-to-face communication and transparency</p>
                    
                    <h2>Success Factors</h2>
                    <ul>
                        <li>Strong Product Owner engagement</li>
                        <li>Team commitment to Scrum values</li>
                        <li>Regular retrospectives and improvement</li>
                        <li>Organizational support</li>
                        <li>Focus on delivering value</li>
                    </ul>
                `
            }
        ]
    },
    
    'kanban': {
        id: 'kanban',
        title: 'Kanban Flow Optimization',
        icon: 'fas fa-columns',
        description: 'Optimize workflow with visual management, WIP limits, and continuous flow.',
        duration: '3-4 hours',
        lessons: 5,
        color: '#f59e0b',
        priority: 'HIGH',
        category: 'Process Management',
        chapters: [
            {
                title: 'Kanban Fundamentals',
                content: `
                    <h1>Kanban System Foundations</h1>
                    
                    <h2>Core Kanban Principles</h2>
                    <ol>
                        <li><strong>Start with what you do now</strong> - Don't make radical changes initially</li>
                        <li><strong>Agree to pursue incremental, evolutionary change</strong> - Small improvements over time</li>
                        <li><strong>Respect current process, roles & responsibilities</strong> - Work with existing structure</li>
                        <li><strong>Encourage leadership at all levels</strong> - Everyone can contribute to improvement</li>
                    </ol>
                    
                    <h2>Kanban Definition</h2>
                    <p>Kanban is a method for managing knowledge work with an emphasis on just-in-time delivery while not overloading team members.</p>
                    
                    <h2>Origins and Philosophy</h2>
                    <p>Originated from Toyota Production System, focusing on:</p>
                    <ul>
                        <li>Visual management</li>
                        <li>Pull-based system</li>
                        <li>Continuous improvement</li>
                        <li>Respect for people</li>
                    </ul>
                `
            },
            {
                title: 'Kanban Practices',
                content: `
                    <h1>Six Core Kanban Practices</h1>
                    
                    <h2>1. Visualize Work</h2>
                    <p>Make work visible on a board showing the flow from request to completion.</p>
                    <ul>
                        <li>Cards represent work items</li>
                        <li>Columns represent process steps</li>
                        <li>Board shows current state</li>
                    </ul>
                    
                    <h2>2. Limit Work in Progress (WIP)</h2>
                    <p>Restrict the number of work items in each process step.</p>
                    <ul>
                        <li>Prevents overload</li>
                        <li>Improves focus</li>
                        <li>Identifies bottlenecks</li>
                        <li>Encourages collaboration</li>
                    </ul>
                    
                    <h2>3. Manage Flow</h2>
                    <p>Monitor and optimize the movement of work through the system.</p>
                    
                    <h2>4. Make Process Policies Explicit</h2>
                    <p>Clearly define rules and criteria for each process step.</p>
                    
                    <h2>5. Implement Feedback Loops</h2>
                    <p>Regular meetings for review and improvement.</p>
                    
                    <h2>6. Improve Collaboratively, Evolve Experimentally</h2>
                    <p>Use scientific approach to make incremental changes.</p>
                `
            },
            {
                title: 'Kanban Board Design',
                content: `
                    <h1>Designing Effective Kanban Boards</h1>
                    
                    <h2>Basic Board Structure</h2>
                    <p>Typical flow: <strong>To Do → In Progress → Testing → Done</strong></p>
                    
                    <h2>Advanced Board Elements</h2>
                    
                    <h3>WIP Limits</h3>
                    <p>Maximum number of items allowed in each column.</p>
                    <ul>
                        <li>Forces focus and completion</li>
                        <li>Reveals bottlenecks</li>
                        <li>Improves collaboration</li>
                    </ul>
                    
                    <h3>Swimlanes</h3>
                    <p>Horizontal divisions for different work types:</p>
                    <ul>
                        <li>By priority (urgent, normal, low)</li>
                        <li>By work type (features, bugs, maintenance)</li>
                        <li>By customer or project</li>
                    </ul>
                    
                    <h3>Expedite Lane</h3>
                    <p>Special lane for urgent/critical items that bypass normal WIP limits.</p>
                    
                    <h2>Card Information</h2>
                    <ul>
                        <li>Brief description</li>
                        <li>Assigned person</li>
                        <li>Due date</li>
                        <li>Priority level</li>
                        <li>Blocked indicators</li>
                    </ul>
                `
            },
            {
                title: 'Kanban Metrics',
                content: `
                    <h1>Measuring Kanban Performance</h1>
                    
                    <h2>Key Flow Metrics</h2>
                    
                    <h3>Lead Time</h3>
                    <p>Total time from customer request to delivery.</p>
                    <ul>
                        <li>Customer-focused metric</li>
                        <li>Includes waiting time</li>
                        <li>Predictability indicator</li>
                    </ul>
                    
                    <h3>Cycle Time</h3>
                    <p>Time from when work starts to when it's completed.</p>
                    <ul>
                        <li>Team efficiency measure</li>
                        <li>Active work time only</li>
                        <li>Process improvement focus</li>
                    </ul>
                    
                    <h3>Throughput</h3>
                    <p>Number of items completed per time period.</p>
                    <ul>
                        <li>Productivity measure</li>
                        <li>Capacity planning tool</li>
                        <li>Trend analysis</li>
                    </ul>
                    
                    <h3>Work in Progress</h3>
                    <p>Current number of active work items.</p>
                    
                    <h3>Flow Efficiency</h3>
                    <p>Ratio of value-add time to total lead time.</p>
                    
                    <h2>Cumulative Flow Diagram</h2>
                    <p>Visual representation showing:</p>
                    <ul>
                        <li>Work item accumulation over time</li>
                        <li>Bottleneck identification</li>
                        <li>Flow stability</li>
                        <li>Trend analysis</li>
                    </ul>
                `
            },
            {
                title: 'Kanban Implementation',
                content: `
                    <h1>Implementing Kanban Successfully</h1>
                    
                    <h2>Implementation Steps</h2>
                    <ol>
                        <li><strong>Map current workflow</strong> - Document existing process</li>
                        <li><strong>Design initial board</strong> - Simple representation</li>
                        <li><strong>Set initial WIP limits</strong> - Start conservative</li>
                        <li><strong>Define policies</strong> - Clear rules for each column</li>
                        <li><strong>Start flowing work</strong> - Begin using the system</li>
                        <li><strong>Measure and improve</strong> - Regular review and adjustment</li>
                    </ol>
                    
                    <h2>Kanban Meetings</h2>
                    
                    <h3>Daily Standup</h3>
                    <p>Brief meeting focused on flow and blockers.</p>
                    
                    <h3>Replenishment Meeting</h3>
                    <p>Regular session to add new work to the board.</p>
                    
                    <h3>Delivery Planning Meeting</h3>
                    <p>Coordinate delivery of completed work.</p>
                    
                    <h3>Service Delivery Review</h3>
                    <p>Analyze metrics and service level performance.</p>
                    
                    <h2>Common Pitfalls</h2>
                    <ul>
                        <li>Setting WIP limits too high</li>
                        <li>Ignoring blocked items</li>
                        <li>Not measuring flow</li>
                        <li>Focusing only on individual productivity</li>
                        <li>Not improving based on metrics</li>
                    </ul>
                    
                    <h2>Success Indicators</h2>
                    <ul>
                        <li>Improved predictability</li>
                        <li>Reduced lead times</li>
                        <li>Better quality</li>
                        <li>Increased customer satisfaction</li>
                        <li>Team engagement</li>
                    </ul>
                `
            }
        ]
    },
    
    'engagement': {
        id: 'engagement',
        title: 'Employee Engagement Excellence',
        icon: 'fas fa-heart',
        description: 'Build highly engaged teams using proven psychological frameworks and engagement strategies.',
        duration: '4-5 hours',
        lessons: 6,
        color: '#10b981',
        priority: 'HIGH',
        category: 'People Management',
        chapters: [
            {
                title: 'Engagement Foundations',
                content: `
                    <h1>Employee Engagement Fundamentals</h1>
                    
                    <h2>What is Employee Engagement?</h2>
                    <p>Employee engagement is the emotional commitment employees have to their organization and its goals.</p>
                    
                    <h2>Gallup Q12 Engagement Elements</h2>
                    <ol>
                        <li>I know what is expected of me at work</li>
                        <li>I have the materials and equipment to do my work right</li>
                        <li>At work, I have the opportunity to do what I do best every day</li>
                        <li>In the last seven days, I have received recognition or praise</li>
                        <li>My supervisor or someone at work seems to care about me as a person</li>
                        <li>Someone at work encourages my development</li>
                        <li>At work, my opinions seem to count</li>
                        <li>The mission/purpose of my company makes me feel my job is important</li>
                        <li>My fellow workers are committed to doing quality work</li>
                        <li>I have a best friend at work</li>
                        <li>Someone has talked to me about my progress in the last six months</li>
                        <li>This last year, I have had opportunities to learn and grow</li>
                    </ol>
                    
                    <h2>Benefits of High Engagement</h2>
                    <ul>
                        <li>23% higher profitability</li>
                        <li>18% higher productivity</li>
                        <li>12% better customer metrics</li>
                        <li>40% lower turnover</li>
                        <li>70% fewer safety incidents</li>
                    </ul>
                `
            },
            {
                title: 'Motivation Theories',
                content: `
                    <h1>Understanding Employee Motivation</h1>
                    
                    <h2>Maslow's Hierarchy of Needs</h2>
                    <ol>
                        <li><strong>Physiological</strong>: Basic salary, safe working conditions</li>
                        <li><strong>Safety</strong>: Job security, health insurance</li>
                        <li><strong>Social</strong>: Team belonging, relationships</li>
                        <li><strong>Esteem</strong>: Recognition, status, respect</li>
                        <li><strong>Self-actualization</strong>: Personal growth, meaningful work</li>
                    </ol>
                    
                    <h2>Herzberg's Two-Factor Theory</h2>
                    <h3>Hygiene Factors (Prevent Dissatisfaction)</h3>
                    <ul>
                        <li>Company policies</li>
                        <li>Supervision quality</li>
                        <li>Working conditions</li>
                        <li>Salary and benefits</li>
                        <li>Job security</li>
                    </ul>
                    
                    <h3>Motivators (Create Satisfaction)</h3>
                    <ul>
                        <li>Achievement and recognition</li>
                        <li>Meaningful work</li>
                        <li>Responsibility and autonomy</li>
                        <li>Growth and advancement</li>
                        <li>Personal development</li>
                    </ul>
                    
                    <h2>Self-Determination Theory</h2>
                    <p>Three basic psychological needs:</p>
                    <ul>
                        <li><strong>Autonomy</strong>: Control over work methods</li>
                        <li><strong>Competence</strong>: Feeling effective and capable</li>
                        <li><strong>Relatedness</strong>: Connection with others</li>
                    </ul>
                `
            }
        ]
    },
    
    'talent': {
        id: 'talent',
        title: 'Talent Management & Onboarding',
        icon: 'fas fa-user-plus',
        description: 'Attract, develop, and retain top talent through strategic talent management practices.',
        duration: '5-6 hours',
        lessons: 7,
        color: '#f97316',
        priority: 'MEDIUM',
        category: 'People Management',
        chapters: [
            {
                title: 'Talent Management Framework',
                content: `
                    <h1>Strategic Talent Management</h1>
                    
                    <h2>Talent Management Lifecycle</h2>
                    <ol>
                        <li><strong>Workforce Planning</strong>: Anticipate future talent needs</li>
                        <li><strong>Talent Acquisition</strong>: Attract and hire best candidates</li>
                        <li><strong>Onboarding</strong>: Integrate new hires effectively</li>
                        <li><strong>Performance Management</strong>: Set goals and provide feedback</li>
                        <li><strong>Learning & Development</strong>: Build capabilities</li>
                        <li><strong>Career Development</strong>: Create growth paths</li>
                        <li><strong>Succession Planning</strong>: Prepare future leaders</li>
                        <li><strong>Retention</strong>: Keep top performers engaged</li>
                    </ol>
                    
                    <h2>Competency Framework Design</h2>
                    <h3>Core Competencies (Everyone)</h3>
                    <ul>
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Problem-solving</li>
                        <li>Adaptability</li>
                    </ul>
                    
                    <h3>Functional Competencies (Role-specific)</h3>
                    <ul>
                        <li>Technical skills</li>
                        <li>Domain knowledge</li>
                        <li>Process expertise</li>
                    </ul>
                    
                    <h3>Leadership Competencies (Managers)</h3>
                    <ul>
                        <li>Strategic thinking</li>
                        <li>People development</li>
                        <li>Decision making</li>
                        <li>Change leadership</li>
                    </ul>
                `
            }
        ]
    },
    
    'change': {
        id: 'change',
        title: 'Change Management Mastery',
        icon: 'fas fa-exchange-alt',
        description: 'Lead successful organizational transformations using proven change management methodologies.',
        duration: '5-6 hours',
        lessons: 7,
        color: '#8b5cf6',
        priority: 'HIGH',
        category: 'Strategic Management',
        chapters: [
            {
                title: 'Change Management Fundamentals',
                content: `
                    <h1>Understanding Organizational Change</h1>
                    
                    <h2>Types of Change</h2>
                    <h3>Developmental Change</h3>
                    <p>Improvement of existing processes, skills, or methods.</p>
                    
                    <h3>Transitional Change</h3>
                    <p>Implementation of new processes, structures, or technologies.</p>
                    
                    <h3>Transformational Change</h3>
                    <p>Fundamental shift in culture, strategy, or business model.</p>
                    
                    <h2>Kotter's 8-Step Process</h2>
                    <ol>
                        <li><strong>Create Urgency</strong>: Build awareness around need for change</li>
                        <li><strong>Form Coalition</strong>: Assemble influential change leaders</li>
                        <li><strong>Create Vision</strong>: Develop clear vision and strategy</li>
                        <li><strong>Communicate Vision</strong>: Share vision throughout organization</li>
                        <li><strong>Empower Action</strong>: Remove obstacles to change</li>
                        <li><strong>Generate Wins</strong>: Create and celebrate short-term wins</li>
                        <li><strong>Sustain Acceleration</strong>: Build on momentum</li>
                        <li><strong>Institute Change</strong>: Anchor changes in culture</li>
                    </ol>
                    
                    <h2>ADKAR Model</h2>
                    <ul>
                        <li><strong>Awareness</strong>: Why change is needed</li>
                        <li><strong>Desire</strong>: Personal motivation to change</li>
                        <li><strong>Knowledge</strong>: How to change</li>
                        <li><strong>Ability</strong>: Skills to implement change</li>
                        <li><strong>Reinforcement</strong>: Sustaining the change</li>
                    </ul>
                `
            }
        ]
    },
    
    'kpi': {
        id: 'kpi',
        title: 'KPI & Performance Management',
        icon: 'fas fa-chart-line',
        description: 'Design and implement effective KPI systems that drive organizational performance.',
        duration: '4-5 hours',
        lessons: 6,
        color: '#ef4444',
        priority: 'HIGH',
        category: 'Performance Management',
        chapters: [
            {
                title: 'KPI Fundamentals',
                content: `
                    <h1>Key Performance Indicators (KPIs)</h1>
                    
                    <h2>What Makes a Good KPI?</h2>
                    <h3>SMART KPIs</h3>
                    <ul>
                        <li><strong>Specific</strong>: Clearly defined and focused</li>
                        <li><strong>Measurable</strong>: Quantifiable and trackable</li>
                        <li><strong>Achievable</strong>: Realistic and attainable</li>
                        <li><strong>Relevant</strong>: Aligned with business objectives</li>
                        <li><strong>Time-bound</strong>: Has defined timeframes</li>
                    </ul>
                    
                    <h2>Types of KPIs</h2>
                    <h3>Leading Indicators</h3>
                    <p>Predict future performance and outcomes.</p>
                    <ul>
                        <li>Sales pipeline value</li>
                        <li>Training hours per employee</li>
                        <li>Customer satisfaction scores</li>
                    </ul>
                    
                    <h3>Lagging Indicators</h3>
                    <p>Measure results of past activities.</p>
                    <ul>
                        <li>Revenue growth</li>
                        <li>Profit margins</li>
                        <li>Employee turnover</li>
                    </ul>
                    
                    <h2>Balanced Scorecard Framework</h2>
                    <h3>Four Perspectives</h3>
                    <ol>
                        <li><strong>Financial</strong>: Revenue, profit, ROI</li>
                        <li><strong>Customer</strong>: Satisfaction, retention, market share</li>
                        <li><strong>Internal Process</strong>: Efficiency, quality, innovation</li>
                        <li><strong>Learning & Growth</strong>: Skills, technology, culture</li>
                    </ol>
                `
            }
        ]
    },
    
    'process': {
        id: 'process',
        title: 'Process Improvement Mastery',
        icon: 'fas fa-cogs',
        description: 'Optimize organizational processes using Lean, Six Sigma, and continuous improvement methodologies.',
        duration: '5-6 hours',
        lessons: 7,
        color: '#6366f1',
        priority: 'MEDIUM',
        category: 'Process Management',
        chapters: [
            {
                title: 'Process Improvement Foundations',
                content: `
                    <h1>Process Improvement Fundamentals</h1>
                    
                    <h2>What is a Process?</h2>
                    <p>A series of connected steps or activities that transform inputs into outputs to create value.</p>
                    
                    <h2>Lean Principles</h2>
                    <ol>
                        <li><strong>Value</strong>: Define what customers truly value</li>
                        <li><strong>Value Stream</strong>: Map all steps in the process</li>
                        <li><strong>Flow</strong>: Ensure smooth flow of work</li>
                        <li><strong>Pull</strong>: Let customer demand drive production</li>
                        <li><strong>Perfection</strong>: Continuously improve toward perfection</li>
                    </ol>
                    
                    <h2>8 Wastes (TIMWOODS)</h2>
                    <ul>
                        <li><strong>Transport</strong>: Unnecessary movement of materials</li>
                        <li><strong>Inventory</strong>: Excess stock or work-in-progress</li>
                        <li><strong>Motion</strong>: Unnecessary human movement</li>
                        <li><strong>Waiting</strong>: Idle time waiting for next step</li>
                        <li><strong>Overproduction</strong>: Making more than needed</li>
                        <li><strong>Overprocessing</strong>: Doing more work than required</li>
                        <li><strong>Defects</strong>: Errors requiring rework</li>
                        <li><strong>Skills</strong>: Underutilized human potential</li>
                    </ul>
                    
                    <h2>PDCA Cycle</h2>
                    <ul>
                        <li><strong>Plan</strong>: Identify improvement opportunity</li>
                        <li><strong>Do</strong>: Implement change on small scale</li>
                        <li><strong>Check</strong>: Measure results</li>
                        <li><strong>Act</strong>: Standardize successful changes</li>
                    </ul>
                `
            }
        ]
    },
    
    'customer': {
        id: 'customer',
        title: 'Customer Relationship Excellence',
        icon: 'fas fa-handshake',
        description: 'Build lasting customer relationships through strategic CRM and customer experience management.',
        duration: '4-5 hours',
        lessons: 6,
        color: '#06b6d4',
        priority: 'HIGH',
        category: 'Customer Management',
        chapters: [
            {
                title: 'Customer Relationship Fundamentals',
                content: `
                    <h1>Customer Relationship Management</h1>
                    
                    <h2>CRM Philosophy</h2>
                    <p>Focus on building long-term relationships rather than one-time transactions.</p>
                    
                    <h2>Customer Lifecycle Stages</h2>
                    <ol>
                        <li><strong>Awareness</strong>: Customer becomes aware of your brand</li>
                        <li><strong>Consideration</strong>: Customer evaluates your solution</li>
                        <li><strong>Purchase</strong>: Customer makes buying decision</li>
                        <li><strong>Onboarding</strong>: Customer learns to use product/service</li>
                        <li><strong>Adoption</strong>: Customer achieves value from solution</li>
                        <li><strong>Renewal</strong>: Customer continues relationship</li>
                        <li><strong>Expansion</strong>: Customer increases engagement</li>
                        <li><strong>Advocacy</strong>: Customer recommends to others</li>
                    </ol>
                    
                    <h2>Customer Journey Mapping</h2>
                    <h3>Key Elements</h3>
                    <ul>
                        <li><strong>Touchpoints</strong>: Every interaction point</li>
                        <li><strong>Emotions</strong>: Customer feelings at each stage</li>
                        <li><strong>Pain Points</strong>: Friction and frustrations</li>
                        <li><strong>Opportunities</strong>: Areas for improvement</li>
                    </ul>
                    
                    <h2>Customer Segmentation</h2>
                    <h3>Segmentation Criteria</h3>
                    <ul>
                        <li><strong>Demographic</strong>: Age, location, company size</li>
                        <li><strong>Behavioral</strong>: Usage patterns, purchase history</li>
                        <li><strong>Psychographic</strong>: Values, attitudes, lifestyle</li>
                        <li><strong>Geographic</strong>: Location-based differences</li>
                    </ul>
                `
            }
        ]
    },
    
    'team': {
        id: 'team',
        title: 'Team Harmony & Collaboration',
        icon: 'fas fa-users-cog',
        description: 'Foster high-performing teams through effective collaboration, communication, and conflict resolution.',
        duration: '4-5 hours',
        lessons: 6,
        color: '#ec4899',
        priority: 'MEDIUM',
        category: 'Team Management',
        chapters: [
            {
                title: 'Team Development Foundations',
                content: `
                    <h1>Building High-Performance Teams</h1>
                    
                    <h2>Tuckman's Team Development Stages</h2>
                    <ol>
                        <li><strong>Forming</strong>: Team comes together, polite and positive</li>
                        <li><strong>Storming</strong>: Conflicts emerge as personalities clash</li>
                        <li><strong>Norming</strong>: Team establishes working relationships</li>
                        <li><strong>Performing</strong>: Team operates at high effectiveness</li>
                        <li><strong>Adjourning</strong>: Team disbands after completing work</li>
                    </ol>
                    
                    <h2>Characteristics of High-Performance Teams</h2>
                    <ul>
                        <li><strong>Clear Purpose</strong>: Shared understanding of goals</li>
                        <li><strong>Psychological Safety</strong>: Safe to take risks and make mistakes</li>
                        <li><strong>Trust</strong>: Members rely on each other</li>
                        <li><strong>Open Communication</strong>: Free flow of ideas and feedback</li>
                        <li><strong>Complementary Skills</strong>: Diverse but aligned capabilities</li>
                        <li><strong>Shared Accountability</strong>: Collective ownership of results</li>
                    </ul>
                    
                    <h2>Psychological Safety</h2>
                    <p>Team climate where members feel safe to:</p>
                    <ul>
                        <li>Ask questions without seeming ignorant</li>
                        <li>Admit mistakes without fear of punishment</li>
                        <li>Raise concerns without being labeled negative</li>
                        <li>Propose ideas without risk of embarrassment</li>
                    </ul>
                    
                    <h2>Building Trust</h2>
                    <h3>The Trust Equation</h3>
                    <p><strong>Trust = (Credibility + Reliability + Intimacy) / Self-Orientation</strong></p>
                    <ul>
                        <li><strong>Credibility</strong>: Expertise and track record</li>
                        <li><strong>Reliability</strong>: Consistency in actions</li>
                        <li><strong>Intimacy</strong>: Safety in sharing</li>
                        <li><strong>Self-Orientation</strong>: Focus on self vs. others</li>
                    </ul>
                `
            }
        ]
    }
};

// Quiz Questions
const quizQuestions = [
    {
        course: 'agile',
        question: 'What are the four core values of the Agile Manifesto?',
        options: [
            'Individuals over processes, Working software over documentation, Customer collaboration over contracts, Responding to change over plans',
            'Speed over quality, Innovation over stability, Growth over profit, Change over tradition',
            'Teams over individuals, Documentation over software, Contracts over collaboration, Plans over change'
        ],
        correct: 0,
        explanation: 'The Agile Manifesto emphasizes individuals and interactions, working software, customer collaboration, and responding to change.'
    },
    {
        course: 'scrum',
        question: 'How long should a Daily Scrum meeting last?',
        options: ['15 minutes', '30 minutes', '1 hour', '2 hours'],
        correct: 0,
        explanation: 'The Daily Scrum is time-boxed to 15 minutes to keep it focused and efficient.'
    },
    {
        course: 'kanban',
        question: 'What is the primary purpose of WIP limits in Kanban?',
        options: [
            'To limit team size',
            'To prevent overload and improve focus',
            'To reduce costs',
            'To speed up delivery'
        ],
        correct: 1,
        explanation: 'WIP limits prevent overloading the system and help teams focus on completing work rather than starting new work.'
    }
];

// Flashcards
const flashcards = [
    {
        course: 'agile',
        front: 'What does INVEST stand for in user story writing?',
        back: 'Independent, Negotiable, Valuable, Estimable, Small, Testable'
    },
    {
        course: 'scrum',
        front: 'What are the 5 Scrum values?',
        back: 'Commitment, Courage, Focus, Openness, Respect'
    },
    {
        course: 'kanban',
        front: 'What are the 6 core Kanban practices?',
        back: '1. Visualize Work, 2. Limit WIP, 3. Manage Flow, 4. Make Policies Explicit, 5. Feedback Loops, 6. Improve Collaboratively'
    }
];

// Scenarios
const scenarios = [
    {
        title: 'Sprint Planning Challenge',
        description: 'Your development team consistently overcommits during sprint planning, leading to incomplete sprints and team frustration.',
        options: [
            'Reduce story point estimates',
            'Improve estimation techniques and use historical velocity',
            'Extend sprint length',
            'Reduce team size'
        ],
        correct: 1,
        explanation: 'Using historical velocity data and improving estimation techniques helps teams make more realistic commitments.'
    },
    {
        title: 'Kanban Bottleneck',
        description: 'Your Kanban board shows work piling up in the "Testing" column, creating a bottleneck.',
        options: [
            'Increase WIP limit for Testing',
            'Add more testers',
            'Analyze the bottleneck and adjust capacity or process',
            'Skip some testing'
        ],
        correct: 2,
        explanation: 'The Kanban approach is to analyze bottlenecks and make systematic improvements to the process.'
    }
];

// Progress tracking
let userProgress = {
    courses: {},
    totalTimeSpent: 0,
    streak: 0,
    badges: [],
    lastActivity: null
};

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('businessAcademyProgress');
    if (saved) {
        userProgress = { ...userProgress, ...JSON.parse(saved) };
    }
    
    // Initialize course progress if not exists
    Object.keys(coursesData).forEach(courseId => {
        if (!userProgress.courses[courseId]) {
            userProgress.courses[courseId] = {
                progress: 0,
                completedChapters: [],
                timeSpent: 0,
                status: 'not-started'
            };
        }
    });
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('businessAcademyProgress', JSON.stringify(userProgress));
}

// Add more quiz questions for other courses
const additionalQuizQuestions = [
    {
        course: 'engagement',
        question: 'According to Herzberg\'s Two-Factor Theory, which factor prevents dissatisfaction but doesn\'t create motivation?',
        options: [
            'Recognition and achievement',
            'Salary and company policies',
            'Personal growth opportunities',
            'Meaningful work'
        ],
        correct: 1,
        explanation: 'Hygiene factors like salary and policies prevent dissatisfaction but don\'t motivate. Motivators create satisfaction and engagement.'
    },
    {
        course: 'change',
        question: 'What is the first step in Kotter\'s 8-Step Change Process?',
        options: [
            'Form a coalition',
            'Create a vision',
            'Create urgency',
            'Communicate the vision'
        ],
        correct: 2,
        explanation: 'Creating urgency is the first step - people need to understand why change is necessary before they will support it.'
    },
    {
        course: 'kpi',
        question: 'Which perspective is NOT part of the Balanced Scorecard framework?',
        options: [
            'Financial',
            'Customer',
            'Competitive',
            'Learning & Growth'
        ],
        correct: 2,
        explanation: 'The four perspectives are Financial, Customer, Internal Process, and Learning & Growth. Competitive is not one of them.'
    }
];

// Merge additional questions with existing ones
quizQuestions.push(...additionalQuizQuestions);

// Add more flashcards
const additionalFlashcards = [
    {
        course: 'engagement',
        front: 'What are the three basic needs in Self-Determination Theory?',
        back: 'Autonomy (control), Competence (effectiveness), Relatedness (connection)'
    },
    {
        course: 'change',
        front: 'What does ADKAR stand for?',
        back: 'Awareness, Desire, Knowledge, Ability, Reinforcement'
    },
    {
        course: 'kpi',
        front: 'What does SMART stand for in KPI design?',
        back: 'Specific, Measurable, Achievable, Relevant, Time-bound'
    },
    {
        course: 'process',
        front: 'What does TIMWOODS represent?',
        back: 'The 8 wastes: Transport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, Skills'
    }
];

// Merge additional flashcards
flashcards.push(...additionalFlashcards);

// Add more scenarios
const additionalScenarios = [
    {
        title: 'Low Employee Engagement',
        description: 'Your team\'s engagement scores have dropped significantly. Exit interviews reveal people feel undervalued and lack growth opportunities.',
        options: [
            'Increase salaries across the board',
            'Implement recognition programs and development plans',
            'Hire new team members',
            'Restructure the entire department'
        ],
        correct: 1,
        explanation: 'According to engagement research, recognition and development opportunities are key motivators that address the root causes identified in exit interviews.'
    },
    {
        title: 'Change Resistance',
        description: 'Your organization is implementing a new software system, but employees are resistant and unwilling to adopt the new technology.',
        options: [
            'Mandate usage with disciplinary action',
            'Apply ADKAR model to address awareness, desire, knowledge, ability, and reinforcement',
            'Delay the implementation',
            'Implement gradually without communication'
        ],
        correct: 1,
        explanation: 'The ADKAR model systematically addresses the reasons for resistance by ensuring people understand why, want to change, know how, can do it, and are reinforced.'
    }
];

// Merge additional scenarios
scenarios.push(...additionalScenarios); 