 class InventoryPage  {
    /* locators */



 getInventoryHeading() {
    return cy.get('.is-size-3')
 }


getTableHeaders() {
    return cy.get('.header')
}

getTableRows() {
    return cy.get('tbody > tr')
}

getAddProductButton() {
    return cy.get('#add_product_btn')
}



getButtonLocator(buttonText) {
    if(buttonText === 'X') return cy.get ('.delete')
        
    else return cy.contains('button', buttonText);
}

getTotal() {
    return cy.get('#total_amount')
}

getModal() {
    return cy.get('.modal')
}

getModalHeading() {
    return cy.get('#modal_title')
}

getLabelByText(labelText) {
    return cy.contains('label', labelText)
}

/*  methods*/

clickButton(buttonText) {
    this.getButtonLocator(buttonText).click();
}

getInputBox(purpose) {
     if(purpose ===  'Quantity') return cy.get('#quantity')
    else if (purpose === 'Product') return cy.get('#product')
    else if (purpose === 'Price') return cy.get('#price')

        else throw new Error (`no input for ${purpose} found`)
}



 }


 export default InventoryPage;