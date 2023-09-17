import {memo, useState} from "react";
import {Button} from "@/shadcn/ui/button";
import {Textarea} from "@/shadcn/ui/textarea";

const Python = () => {
    const [text, setText] = useState('');

    /**
     * Method
     * @param text
     */
    const onSpeak = (text) => {
        const audio = new Audio('http://localhost:8000/speaks?text=' + text);
        audio.play();
    }

    const onClick = () => {
        onSpeak(text)
    }

    const english = [
        'Python',
        'Variable',
        'Function',
        'Class',
        'List',
        'Tuple',
        'Dictionary',
        'Set',
        'Loop',
        'Conditional',
        'Module',
        'Package',
        'Import',
        'Exception',
        'File',
        'String',
        'Integer',
        'Float',
        'Boolean',
        'None',
        'Object',
        'Method',
        'Attribute',
        'Inheritance',
        'Polymorphism',
        'Encapsulation',
        'Abstraction',
        'Lambda',
        'Decorator',
        'Generator',
        'Iterator',
        'Recursion',
        'Sorting',
        'Searching',
        'Slice',
        'Index',
        'Assignment',
        'Comparison',
        'Arithmetic',
        'Logical',
        'And',
        'Or',
        'Not',
        'If',
        'Else',
        'Elif',
        'While',
        'For',
        'Break',
        'Continue',
        'Pass',
        'Return',
        'Global',
        'Local',
        'Scope',
        'List comprehension',
        'Dictionary comprehension',
        'Set comprehension',
        'Object-oriented programming',
        'Polymorphic function',
        'Docstring',
        'Type hinting',
        'Self',
        'Super',
        'Init',
        'Constructor',
        'Property',
        'Getter',
        'Setter',
        'Deleter',
        'Class attribute',
        'Instance attribute',
        'Multiple inheritance',
        'Metaclass',
        'Generator function',
        'Iterable',
        'Next',
        'StopIteration',
        'Exception handling',
        'Try',
        'Except',
        'Finally',
        'Raise',
        'Assertion',
        'FileNotFoundError',
        'TypeError',
        'ValueError',
        'ZeroDivisionError',
        'NameError',
        'IndexError',
        'KeyError',
        'SyntaxError',
        'IndentationError',
        'JSON',
        'CSV',
        'Regular expression',
        'SQL',
        'SQLite',
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'API',
        'HTTP',
        'Request',
        'Response',
        'URL',
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'Status code',
        'Middleware',
        'Authentication',
        'Authorization',
        'Cookie',
        'Session',
        'JSON Web Token (JWT)',
        'Framework',
        'Django',
        'Flask',
        'Pyramid',
        'Tornado',
        'Bottle',
        'FastAPI',
        'SQLAlchemy',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Scikit-learn',
        'TensorFlow',
        'PyTorch',
        'Keras',
        'Deep learning',
        'Machine learning',
        'Data science',
        'Data analysis',
        'Data visualization',
        'Data preprocessing',
        'Model training',
        'Model evaluation',
        'Overfitting',
        'Underfitting',
        'Cross-validation',
        'Gradient descent',
        'Feature engineering',
        'Neural network',
        'Convolutional neural network (CNN)',
        'Recurrent neural network (RNN)',
        'Natural language processing (NLP)',
        'Sentiment analysis',
        'Text classification',
        'Tokenization',
        'Stemming',
        'Lemmatization',
        'Bag of words (BoW)',
        'TF-IDF',
        'Word embedding',
        'Word2Vec',
        'LSTM',
        'GAN',
        'Reinforcement learning',
        'Q-learning',
        'Policy gradient',
        'Agent',
        'Environment',
        'State',
        'Action',
        'Reward',
        'Exploration',
        'Exploitation',
        'Markov chain',
        'Monte Carlo',
        'Big O notation',
        'Time complexity',
        'Space complexity',
        'Data structure',
        'List',
        'Stack',
        'Queue',
        'Linked list',
        'Array',
        'Set',
        'Dictionary',
        'Tree',
        'Binary tree',
        'Binary search tree (BST)',
        'Graph',
        'Hash table',
        'Heap',
        'Priority queue',
        'Sorting algorithm',
        'Bubble sort',
        'Insertion sort',
        'Selection sort',
        'Merge sort',
        'Quick sort',
        'Radix sort',
        'Dynamic programming',
        'Greedy algorithm',
        'Backtracking',
        'Divide and conquer',
        'Memoization',
        'Regular expression',
        'Thread',
        'Multithreading',
        'Concurrency',
        'Mutex',
        'Deadlock',
        'Semaphore',
        'Parallelism',
        'Multiprocessing',
        'Global Interpreter Lock (GIL)',
        'Asynchronous',
        'Coroutine',
        'Event loop',
        'async',
        'await',
        'Thread pool',
        'Database',
        'SQL',
        'NoSQL',
        'ORM (Object-Relational Mapping)',
        'CRUD (Create, Read, Update, Delete)',
        'Migration',
        'API endpoint',
        'RESTful',
        'SOAP',
        'Websocket',
        'Authentication token',
        'OAuth',
        'CSRF (Cross-Site Request Forgery)',
        'XSS (Cross-Site Scripting)',
        'CORS (Cross-Origin Resource Sharing)',
        'Frontend',
        'Backend',
        'Full stack',
        'User interface (UI)',
        'User experience (UX)',
        'Responsive design',
        'Framework',
        'Library',
        'Dependency',
        'Package manager',
        'Virtual environment',
        'Dependency injection',
        'Docker',
        'Container',
        'Kubernetes',
        'Microservices',
        'Monolithic',
        'Scalability',
        'Load balancing',
        'Caching',
        'CDN (Content Delivery Network)',
        'API gateway',
        'Version control',
        'Git',
        'Repository',
        'Branch',
        'Merge',
        'Pull request',
        'Commit',
        'Clone',
        'Fork',
        'Issue',
        'Bug',
        'Agile',
        'Scrum',
        'Kanban',
        'Waterfall',
        'Sprint',
        'User story',
        'Product backlog',
        'Sprint backlog',
        'Burn down chart',
        'Code review',
        'Code quality',
        'Code refactoring',
        'Code smell',
        'Technical debt',
        'Documentation',
        'Agile manifesto',
        'DevOps',
        'Continuous integration',
        'Continuous delivery',
        'Deployment pipeline',
        'Automation',
        'Monitoring',
        'Logging',
        'Metrics',
        'Error handling',
        'Performance optimization',
        'Profiling',
        'Security',
        'Penetration testing',
        'Firewall',
        'Encryption',
        'HTTPS',
        'API documentation',
        'SDK (Software Development Kit)',
        'IDE (Integrated Development Environment',
        'Unit testing',
        'Integration testing',
        'Functional testing',
        'Regression testing',
        'Test case',
        'Test suite',
        'Mocking',
        'Test-driven development (TDD)',
        'Versioning',
        'Semantic versioning (SemVer)',
        'Dependency management',
        'Third-party library',
        'Standard library',
        'PEP (Python Enhancement Proposal)',
        'PIP (Python Package Installer)',
        'Conda',
        'Jupyter Notebook',
        'REPL (Read-Eval-Print Loop)',
        'Data type',
        'Iterable',
        'Immutable',
        'Mutable',
        'Serialization',
        'Deserialization',
        'JSON',
        'YAML',
        'CSV',
        'XML',
        'HTTP status code',
        'URL',
        'Query parameter',
        'Path parameter',
        'Request body',
        'Response body',
        'Middleware',
        'Authentication',
        'Authorization',
        'Session',
        'Cookies',
        'CSRF token',
        'Cross-origin requests',
        'Content negotiation',
        'REST API',
        'GraphQL',
        'SOAP API',
        'WebSockets',
        'CRUD operations',
        'Data validation',
        'Model-View-Controller (MVC)',
        'Model-View-ViewModel (MVVM)',
        'Singleton',
        'Factory pattern',
        'Observer pattern',
        'Strategy pattern',
        'Decorator pattern',
        'Adapter pattern',
        'Proxy pattern',
        'Builder pattern',
        'Command pattern',
        'Chain of Responsibility pattern',
        'Prototype pattern',
        'Composite pattern',
        'Visitor pattern',
        'Iterator pattern',
        'Mediator pattern',
        'State pattern',
        'Template method pattern',
        'Facade pattern',
        'Dependency Injection pattern',
        'Anti-pattern',
        'Code smell',
        'Refactoring',
        'Design pattern',
        'Design principles (SOLID)',
        'KISS (Keep It Simple, Stupid) principle',
        'SRP (Single Responsibility Principle)',
        'OCP (Open/Closed Principle)',
        'LSP (Liskov Substitution Principle)',
        'ISP (Interface Segregation Principle)',
        'DIP (Dependency Inversion Principle)',
        'Agile methodologies',
        'Waterfall methodology',
        'Scrum methodology',
        'Kanban methodology',
        'Lean methodology',
        'Extreme Programming (XP)',
        'Test-Driven Development (TDD)',
        'Behavior-Driven Development (BDD)',
        'Continuous Integration (CI)',
        'Continuous Delivery (CD)',
        'Continuous Deployment (CD)',
        'DevOps culture',
        'Infrastructure as Code (IaC)',
]
    ;

    /**
     * Render View
     */
    return (
        <div className={"container"}>
            <h1>Danh sách các ký tự từ 'a' đến 'z'</h1>
            <ul>
                {english.map((letter, index) => (
                    <Button key={index} onClick={() => onSpeak(letter)}>{letter}</Button>
                ))}
            </ul>
        </div>
    );
};

export default memo(Python);
