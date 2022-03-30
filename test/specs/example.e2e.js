var chai = require('chai');
describe('My Login application', () => {
    it('Add Todo', async () => {

		const Add = await $("~Add");
		await Add.click();

		const AddTitle = await $("~AddTitle");
		await AddTitle.addValue("Buy Milk")

		const AddDesc = await $("~AddDesc");
		await AddDesc.addValue("2 box of milk")

		const AddDate = await $("~AddDate");
		await AddDate.click();

		const date = await $("~28 March 2022");
		await date.click();

		const dateOK = await $("//android.widget.Button['resource-id = android:id/button1']")
		await dateOK.click();

		const AddSubmit = await $("~AddSubmit");
		await AddSubmit.click();
		await AddSubmit.waitForExist({reverse: true});
		
		const checkTitle = await $("(//android.view.ViewGroup[@content-desc='Todo'])[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]").getText();
		chai.expect(checkTitle).to.equal('Buy Milk');
		
    });
	it('View Description', async () => {

		const Detail = await $("~Detail");
		await Detail.click();

		const desc = await $("~desc").getText()  
		expect(desc).to.equal('2 box of milk')
		
    });
	it('Edit Todo', async () => {
		
		const Add = await $("~Edit");
		await Add.click();

		const EditTitle = await $("~EditTitle");
		await EditTitle.clearValue();
		await EditTitle.addValue("Buy Water");

		const EditDesc = await $("~EditDesc");
		await EditDesc.clearValue(); 
		await EditDesc.addValue("2 bottles");

		const EditDate = await $("~EditDate");
		await EditDate.click();

		const date = await $("~25 March 2022");
		await date.click();

		const dateOK = await $("//android.widget.Button['resource-id = android:id/button1']");
		await dateOK.click();

		const Save = await $("~Save");
		await Save.click();
		await Save.waitForExist({reverse: true});
		
		await browser.pause(3000);
		
		const checkTitle = await $("(//android.view.ViewGroup[@content-desc='Todo'])[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]").getText();
		chai.expect(checkTitle).to.equal('Buy Water');
		
		await $("~Detail").click();
		const desc = await $("~desc").getText() 
		chai.expect(desc).to.equal('2 bottles');
		
	});
	it('Click Star', async () => {
		
		const Star = await $("~Star");
		await Star.click();
		
		await browser.pause(3000);

		const truestar = await $("(//android.view.ViewGroup[@content-desc='Star'])[1]/android.widget.ImageView");
		const attr = await truestar.getAttribute('content-desc');
		chai.expect(attr).to.equal('truestar');
		
	});
	it('Click Checkbox', async () => {

		const Checkbox = await $("~Checkbox");
		await Checkbox.click();

		await browser.pause(3000);

		const attr = await Checkbox.getAttribute('checked');
		chai.expect(attr).to.equal('true');

	});
	it('Search Todo', async () => {

		const Search = await $("~Search");
		await Search.addValue("Buy Water");

		const checkTitle = await $("(//android.view.ViewGroup[@content-desc='Todo'])[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]").getText();
		chai.expect(checkTitle).to.equal('Buy Water');

	});
	it.only('Delete Todo', async () => {

		const Todo = await $("~Todo");

		const Delete = await $("~Delete");
		await Delete.click();

		const DeleteConF = await $("~DeleteConF");
		await DeleteConF.click();
		await DeleteConF.waitForExist({reverse: true});

		await browser.pause(1000);

		await Todo.waitForExist({reverse: true});
  
	});
});

