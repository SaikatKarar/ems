const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                title: "Prepare sales report",
                description: "Compile Q2 sales data for review.",
                date: "2025-06-28",
                category: "Reporting",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Update client list",
                description: "Clean up outdated contacts from CRM.",
                date: "2025-06-30",
                category: "Admin",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Follow up with leads",
                description: "Call potential customers from June list.",
                date: "2025-07-01",
                category: "Sales",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                title: "Design banner",
                description: "Create promotional banner for July sale.",
                date: "2025-06-29",
                category: "Design",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Fix homepage layout",
                description: "Resolve mobile responsiveness issue.",
                date: "2025-06-28",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Write blog draft",
                description: "Draft blog post for travel tips.",
                date: "2025-07-01",
                category: "Content",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Update pricing page",
                description: "Reflect new pricing structure.",
                date: "2025-06-27",
                category: "Marketing",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                title: "Onboard new intern",
                description: "Set up tools and walk through tasks.",
                date: "2025-07-01",
                category: "HR",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Organize team lunch",
                description: "Finalize venue and menu for Friday lunch.",
                date: "2025-06-30",
                category: "Event",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Update employee handbook",
                description: "Add latest leave policy changes.",
                date: "2025-06-26",
                category: "HR",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                title: "Create monthly invoice",
                description: "Generate client invoices for June.",
                date: "2025-06-30",
                category: "Finance",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Reconcile transactions",
                description: "Match bank statements with ledger.",
                date: "2025-06-28",
                category: "Finance",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Review tax filing",
                description: "Verify quarterly tax submission.",
                date: "2025-07-01",
                category: "Compliance",
                active: false,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Prepare budget report",
                description: "Draft budget forecast for Q3.",
                date: "2025-07-02",
                category: "Finance",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                title: "Test payment gateway",
                description: "Run test cases on new Razorpay integration.",
                date: "2025-06-27",
                category: "QA",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Fix login bug",
                description: "Resolve session timeout error.",
                date: "2025-06-29",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Document API endpoints",
                description: "Update Swagger docs for new APIs.",
                date: "2025-06-30",
                category: "Development",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Create test cases",
                description: "Add unit tests for user module.",
                date: "2025-07-01",
                category: "QA",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Run regression test",
                description: "Ensure all major workflows function properly.",
                date: "2025-07-02",
                category: "QA",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));


}
