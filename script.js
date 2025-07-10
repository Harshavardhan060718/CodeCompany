let button = document.getElementById("subbutton");
let input = document.getElementById("input");
let form = document.getElementById("form");
let msg = document.getElementById("msg");

const companyData = {
    strings: {
        "Reverse Word in a String": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Flipkart", position: "Backend Developer", salary: "₹22-32 LPA" }
        ],
        "Roman Number to Integer and vice versa": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1/2", salary: "₹25-45 LPA" },
            { company: "Meta (Facebook)", position: "Software Engineer", salary: "₹45-65 LPA" }
        ],
        "Longest Common Prefix": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Adobe", position: "Software Engineer", salary: "₹28-42 LPA" }
        ],
        "Check for Anagrams": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Paytm", position: "Software Engineer", salary: "₹20-30 LPA" }
        ]
    },

    arrays: {
        "Kadane's Algorithm": [
            { company: "Amazon", position: "SDE-1/2", salary: "₹26-45 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-60 LPA" },
            { company: "Microsoft", position: "SDE-1/2", salary: "₹25-50 LPA" },
            { company: "Goldman Sachs", position: "Software Engineer", salary: "₹30-45 LPA" }
        ],
        "Stock Buy and Sell": [
            { company: "Amazon", position: "SDE-1/2", salary: "₹26-45 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-60 LPA" },
            { company: "Microsoft", position: "SDE-1/2", salary: "₹25-50 LPA" },
            { company: "Morgan Stanley", position: "Software Engineer", salary: "₹28-42 LPA" }
        ],
        "Majority Element (>n/2 times)": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Uber", position: "Software Engineer", salary: "₹32-48 LPA" }
        ]
    },

    linkedList: {
        "Reverse a Linked List": [
            { company: "Amazon", position: "SDE-1/2", salary: "₹26-45 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-60 LPA" },
            { company: "Microsoft", position: "SDE-1/2", salary: "₹25-50 LPA" },
            { company: "Netflix", position: "Software Engineer", salary: "₹40-65 LPA" }
        ],
        "Find Middle of the Linked List": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Zomato", position: "Software Engineer", salary: "₹25-35 LPA" }
        ],
        "Remove Duplicates from Sorted Array": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Swiggy", position: "Software Engineer", salary: "₹22-32 LPA" }
        ]
    },

    stacks: {
        "Parenthesis Evaluation": [
            { company: "Amazon", position: "SDE-1/2", salary: "₹26-45 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-60 LPA" },
            { company: "Microsoft", position: "SDE-1/2", salary: "₹25-50 LPA" },
            { company: "Oracle", position: "Software Engineer", salary: "₹18-30 LPA" }
        ],
        "Min Stack": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Salesforce", position: "Software Engineer", salary: "₹28-42 LPA" }
        ],
        "Implement Stack using Queues": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Adobe", position: "Software Engineer", salary: "₹28-42 LPA" }
        ],
        "Implement Queue using Stacks": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "VMware", position: "Software Engineer", salary: "₹22-35 LPA" }
        ],
        "Reverse Polish Notation": [
            { company: "Amazon", position: "SDE-1/2", salary: "₹26-45 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-60 LPA" },
            { company: "Microsoft", position: "SDE-1/2", salary: "₹25-50 LPA" },
            { company: "Twitter", position: "Software Engineer", salary: "₹35-50 LPA" }
        ],
        "Remove All Adjacent Duplicates in String": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Myntra", position: "Software Engineer", salary: "₹20-30 LPA" }
        ],
        "Backspace String Compare": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Razorpay", position: "Software Engineer", salary: "₹25-35 LPA" }
        ]
    },

    hashing: {
        "Two Sum": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Meta (Facebook)", position: "Software Engineer", salary: "₹45-65 LPA" }
        ],
        "First Unique Character in String": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Apple", position: "Software Engineer", salary: "₹40-60 LPA" }
        ],
        "Intersection of Two Arrays": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "LinkedIn", position: "Software Engineer", salary: "₹32-48 LPA" }
        ]
    },

    recursionAndBacktracking: {
        "Factorial, Fibonacci": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "TCS", position: "Software Engineer", salary: "₹3.5-8 LPA" }
        ],
        "Subsets of an Array": [
            { company: "Amazon", position: "SDE-1/2", salary: "₹26-45 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-60 LPA" },
            { company: "Microsoft", position: "SDE-1/2", salary: "₹25-50 LPA" },
            { company: "ByteDance", position: "Software Engineer", salary: "₹35-50 LPA" }
        ]
    },

    trees: {
        "Inorder Traversal": [
            { company: "Amazon", position: "SDE-1/2", salary: "₹26-45 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-60 LPA" },
            { company: "Microsoft", position: "SDE-1/2", salary: "₹25-50 LPA" },
            { company: "Nvidia", position: "Software Engineer", salary: "₹35-55 LPA" }
        ],
        "Height of Binary Tree": [
            { company: "Amazon", position: "SDE-1", salary: "₹26-38 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-55 LPA" },
            { company: "Microsoft", position: "SDE-1", salary: "₹25-40 LPA" },
            { company: "Intel", position: "Software Engineer", salary: "₹22-35 LPA" }
        ],
        "Check Symmetric Tree": [
            { company: "Amazon", position: "SDE-1/2", salary: "₹26-45 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-60 LPA" },
            { company: "Microsoft", position: "SDE-1/2", salary: "₹25-50 LPA" },
            { company: "Qualcomm", position: "Software Engineer", salary: "₹25-40 LPA" }
        ],
        "BST Insertion": [
            { company: "Amazon", position: "SDE-1/2", salary: "₹26-45 LPA" },
            { company: "Google", position: "Software Engineer", salary: "₹35-60 LPA" },
            { company: "Microsoft", position: "SDE-1/2", salary: "₹25-50 LPA" },
            { company: "IBM", position: "Software Engineer", salary: "₹15-25 LPA" }
        ]
    }


}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    const userInput = input.value.trim().toLowerCase();
    let found = false;
    let resultHTML = "";

    // Store best match
    let bestMatch = null;
    let bestMatchKey = "";

    for (let category in companyData) {
        let questions = companyData[category];
        for (let question in questions) {
            const lowerQuestion = question.toLowerCase();
            if (lowerQuestion === userInput) {
                // Exact match - highest priority
                bestMatch = questions[question];
                bestMatchKey = question;
                found = true;
                break;
            } else if (lowerQuestion.includes(userInput)) {
                // Partial match - lower priority
                if (!found) {
                    bestMatch = questions[question];
                    bestMatchKey = question;
                    found = true;
                }
            }
        }
        if (found && bestMatch) break;
    }

    if (found && bestMatch) {
        resultHTML += `<h3>${bestMatchKey}</h3><ul>`;
        bestMatch.forEach(entry => {
            resultHTML += `<li><strong>${entry.company}</strong>: ${entry.position}, ${entry.salary}</li>`;
        });
        resultHTML += "</ul>";
    } else {
        resultHTML = `<p style="color:red;">❌ No matching question found. Try refining your search (e.g. "reverse linked list").</p>`;
    }

    // ✅ Just this line changed
    msg.innerHTML = `<div class="result-box">${resultHTML}</div>`;
});