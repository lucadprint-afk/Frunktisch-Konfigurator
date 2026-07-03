function doGet(){
    return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle("Frunktisch Konfigurator");
}

function include(f){
  return HtmlService.createHtmlOutputFromFile(f).getContent();
}

function saveOrder(order){

  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("Orders");

  sheet.appendRow([
    order.id,
    order.createdAt,
    order.model,
    order.color,
    order.options.join(", "),
    order.price
  ]);

  return true;
}
