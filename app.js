const income = document.querySelector('h4.income')
const current = document.querySelector('h4.current')
const expense = document.querySelector('h4.expense')
const form = document.querySelector('form')
const select = form.querySelector('select')
let amount = form.querySelector('input')
const purpose = form.querySelector('.textarea')
const transactionHistory = document.querySelector('.header-2')



form.addEventListener('click', createTransaction)
window.addEventListener('DOMContentLoaded', loadPage)
// select.addEventListener('change', selectType)

// amount.addEventListener('keyup', )

const transactions = []

class Transaction {
    constructor(amount, type, purpose) {
        this.amount = amount
        this.type = type
        this.purpose = purpose
    }
}

// const newTransaction = new Transaction(5000, 'expense', 'shawtie')

// transactions.push(newTransaction)

// console.log(transactions)

// function selectType(e) {
//     e.preventDefault()
    
// }

function loadPage(e) {
    e.preventDefault()
    const empty = `
        <div class='empty'>
            <h3>There is no transaction yet</h3>
        </div>
    `
    if (transactions.length === 0) {
        transactionHistory.insertAdjacentHTML('beforeend', empty)
    } else {
        transactionHistory.querySelector('.empty').style.display = 'none'
    }
}

function createTransaction(e) {
    e.preventDefault();
    // Temporary Storage
    if (e.target.classList.contains('btn')) {
        const selected = select.value
        switch (selected) {
            case 'income':
                type = 'Income'
                break
            case 'expense':
                type = 'Expense'
                break
        }

        const inputValue = parseInt(amount.value)
        const textareaValue = purpose.value
        
        

        const newTransaction = new Transaction(inputValue, type, textareaValue)

        transactions.push(newTransaction)
        // console.log(transactions)

        loadPage(e)
        // Interface

        if (amount.value === '' || purpose.value === '') {
            alert ('Text field is empty')
            return
        } 


        const markup = `
            <div class="white-bg">
                <div class="${newTransaction.type === 'Expense' ? 'red-bg' : 'green-bg'}"></div>
                <h2>${newTransaction.purpose}</h2>
                <div class="right-hand">
                    <p>${newTransaction.type}</p>
                    <h2 class="${newTransaction.type === 'Expense' ? 'expense' : 'income'}">$${newTransaction.amount}</h2>
                </div>
            </div>
        `
        // if (newTransaction.type = 'expense') {
        //     const red = document.querySelector('.blue-bg')
        //     red.className = 'green-bg'
        //     console.log(red)
        //     // TransactionHistory.querySelector('.')
        // }
        

        transactionHistory.insertAdjacentHTML('beforeend', markup)

        if (newTransaction.type === 'Income') {
            let currentBalance = document.querySelector('#current-balance').innerText
            // console.log(currentBalance)
            currentBalance = parseInt(currentBalance)
            // console.log(currentBalance)
            
            let amountValue = inputValue
            amountValue = parseInt(amountValue)
            // console.log(amountValue)
            
            
            
            
            currentBalance += amountValue
            
            
            document.querySelector('#current-balance').innerText = currentBalance

            let incomeBalance = document.querySelector('#income-balance').innerText
            incomeBalance = parseInt(incomeBalance)

            incomeBalance += amountValue
            document.querySelector('#income-balance').innerText = incomeBalance

        } else {
            let currentBalance = document.querySelector('#current-balance').innerText
            // console.log(currentBalance)
            currentBalance = parseInt(currentBalance)
            // console.log(currentBalance)
            
            let amountValue = inputValue
            amountValue = parseInt(amountValue)
            // console.log(amountValue)




            currentBalance -= amountValue
            
            document.querySelector('#current-balance').innerText = currentBalance

            let expenseBalance = document.querySelector('#expense-balance').innerText
            expenseBalance = parseInt(expenseBalance)

            expenseBalance += amountValue
            document.querySelector('#expense-balance').innerText = expenseBalance
        }

        amount.value = ''
        purpose.value = ''
    }    
}
