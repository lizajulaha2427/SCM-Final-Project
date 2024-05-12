// Sample data for demonstration
let expensesData = [300, 200, 500, 400]; // Initial expenses data
let totalIncome = 2000; // Initial income value

// Initialize the expense chart
const expenseChartCtx = document.getElementById('expenseChart').getContext('2d');
const expenseChart = new Chart(expenseChartCtx, {
    type: 'doughnut',
    data: {
        labels: ["Groceries", "Entertainment", "Bills", "Others"],
        datasets: [{
            label: 'Expenses',
            backgroundColor: ['#DFA4FF', '#FFBEDF', '#FFF981', '#4bc0c0'],
            data: expensesData
        }]
    },
    options: {
        elements: {
            arc: {
                borderColor: '#000', // Change border color to black
                borderWidth: 2 // Set border width
            }
        }
    }
});

// Function to update the chart and summary
function updateData(newExpenses) {
    // Update expenses data
    expenseChart.data.datasets[0].data = newExpenses;

    // Update expense chart
    expenseChart.update();

    // Update summary section
    const totalExpenses = newExpenses.reduce((a, b) => a + b, 0);
    const totalSavings = totalIncome - totalExpenses;

    document.getElementById('expenseAmount').innerText = `$${totalExpenses}`;
    document.getElementById('savingsAmount').innerText = `$${totalSavings}`;
}

// Update data button event listener
document.getElementById('updateDataBtn').addEventListener('click', function() {
    // Get new expenses values from inputs
    const newGroceries = parseFloat(document.getElementById('newGroceries').value);
    const newEntertainment = parseFloat(document.getElementById('newEntertainment').value);
    const newBills = parseFloat(document.getElementById('newBills').value);
    const newOthers = parseFloat(document.getElementById('newOthers').value);

    // Update expenses data array
    const newExpensesData = [newGroceries, newEntertainment, newBills, newOthers];

    // Update the chart and summary with new data
    updateData(newExpensesData);
});

// Update income button event listener
document.getElementById('updateIncomeBtn').addEventListener('click', function() {
    // Get new income value from input
    const newIncome = parseFloat(document.getElementById('newIncome').value);

    // Update total income value
    totalIncome = newIncome;

    // Update summary section with new income value
    document.getElementById('incomeAmount').innerText = `$${totalIncome}`;

    // Update summary section with recalculated savings
    const totalExpenses = expensesData.reduce((a, b) => a + b, 0);
    const totalSavings = totalIncome - totalExpenses;
    document.getElementById('savingsAmount').innerText = `$${totalSavings}`;
});
