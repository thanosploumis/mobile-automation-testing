describe("Mobile Automation Test - ApiDemo", () => {

    it('should display the app title called API Demos', async () => {
        await expect(
            $('/android.widget.TextView[@text="API Demos"]').toHaveText('API Demos')
        )
    })

    it("should find and click the 'App' element", async () => {

        await $('//android.widget.TextView[@text="App"]').click()

    })

    it("should find and click the 'Alarm' element", async () => {

        await $('//android.widget.TextView[@text="Alarm"]').click()

    })

    it("should find and click the 'Alarm Controller' element", async () => {

        await $('//android.widget.TextView[@text="Alarm Controller"]').click()

    })

    it("should find and click the 'ONE SHOT ALARM' button", async () => {

        await $('//android.widget.Button[@text="ONE SHOT ALARM"]').click()

    })

    it("should be present a pop up message with text '30 seconds'", async () => {

        const toast = $('//android.widget.Toast[@package="com.android.settings"]')

        await expect(toast).toHaveTextContaining('30 seconds')
    })

    it("should be present a pop up message with text 'gone off'", async () => {
        // Wait for the toast message to appear

        await browser.waitUntil(async () => {
            const toast = $('//android.widget.Toast[@package="com.android.settings"]')
            const toastText = await toast.getText()

            return (toast.isDisplayed() && toastText.includes('gone off'))
        }, { timeout: 35000 })

    })


})


