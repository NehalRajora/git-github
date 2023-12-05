//input

[
    {
        id: 1,
        name: "one",
        parent: null
    },
    {
        id: 2,
        name: "two",
        parent: null
    },{
        id: 3,
        name: "three",
        parent: null
    },{
        id: 4,
        name: "four",
        parent: null
    },{
        id: 5,
        name: "five",
        parent: null
    },{
        id: 6,
        name: "six",
        parent: 1
    },{
        id: 7,
        name: "seven",
        parent: 1
    },{
        id: 8,
        name: "eight",
        parent: 6
    },{
        id: 9,
        name: "nine",
        parent: 7
    },{
        id: 10,
        name: "ten",
        parent: 2
    },{
        id: 11,
        name: "eleven",
        parent: 10
    }
]

let detailData = [
    {
        id: 1,
        name: "one",
        parent: null
    },
    {
        id: 2,
        name: "two",
        parent: null
    },
    {
        id: 3,
        name: "three",
        parent: null
    },
    {
        id: 4,
        name: "four",
        parent: null
    },
    {
        id: 5,
        name: "five",
        parent: null
    },
    {
        id: 6,
        name: "six",
        parent: 1
    },
    {
        id: 7,
        name: "seven",
        parent: 1
    },
    {
        id: 8,
        name: "eight",
        parent: 6
    },
    {
        id: 9,
        name: "nine",
        parent: 7
    },
    {
        id: 10,
        name: "ten",
        parent: 2
    },
    {
        id: 11,
        name: "eleven",
        parent: 10
    }
]

// display the object whose parent is null

/* let itemsWithNull= detailData.filter(item => item.parent === null);

console.log(itemsWithNull); */

function addChild(data, childId, childName, parentId) {
    // Check if the parent with parentId exists
    let parentIndex = data.findIndex(item => item.id === parentId);

    if (parentIndex !== -1) {
        // Parent found, add the child
        let childObject = {
            id: childId,
            name: childName,
            parent: parentId
        };

        data.push(childObject);

        return data;
    } 
}

// Example usage:
let updatedData = addChild(detailData, 6, "six", 1);
console.log(updatedData);
//output

[
    {
        id: 1,
        name: "one",
        parent: null,
        child: [
            {
                id: 6,
                name: "six",
                parent: 1,
                child: [{
                    id: 8,
                    name: "eight",
                    parent: 6
                }]
            },{
                id: 7,
                name: "seven",
                parent: 1,
                child: [
                    {
                        id: 9,
                        name: "nine",
                        parent: 7
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "two",
        parent: null,
        child: [
            {
                id: 10,
                name: "ten",
                parent: 2,
                child: [
                    {
                        id: 11,
                        name: "eleven",
                        parent: 10
                    }
                ]
            }
        ]
    },{
        id: 3,
        name: "three",
        parent: null
    },{
        id: 4,
        name: "four",
        parent: null
    },{
        id: 5,
        name: "five",
        parent: null
    }
]