// use a depth first search as a helper function to find cycles via a recursive call
function depthFirstSearch (graph, marked, currentNode, parentNode) {
    // mark current node as visted
    marked[currentNode] = true;

    // iterate over nodes connected to our current node (neighbors)
    for (let i = 0; i < graph[currentNode].length; i++) {
        // set neighbor to i-th node connected to our current node
        var neighbor = graph[currentNode][i];

        // if neighbor has not been marked as visted
        if (!marked[neighbor]) {
            // recursively call our depth first search with our current neighbor set as our current node, and our current node set as our parent node
            if (depthFirstSearch(graph, marked, neighbor, currentNode)) {
                // if recursive call returns true, return true
                return true;
            }
        }
        // if neighbor has been marked as visited already (fails above if statement) and isn't our current parent node, then a cycle has been found
        else if (neighbor != parentNode) {
            return true;
        }
    }

    // if all neightbors have been either been visited or are our current parent node, there is no cycle in the graph
    return false
}

function hasCycle(graph) {
    // initialize a set to track nodes that have marked as visited
    let marked = {};

    // loop over every node in the graph, if that node has not been marked as visited, call depth first search function to see if there is a cycle starting at that node
    for (let node in graph) {
        if (!marked[node]) {
            if (depthFirstSearch(graph, marked, node, null)) {
                return true;
            }
        }
    }

    // if no cycle is found for any node, return false
    return false;
}
