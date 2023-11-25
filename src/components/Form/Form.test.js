
import userEvent from "@testing-library/user-event"
import Form from "."
import {fireEvent, render, screen} from "@testing-library/react"


test("Koşulların onaylanmasına göre buton aktifliği", async()=>{
    render(<Form/>)

    const orderButton = screen.getByRole("button")
    const checkBox = screen.getByRole("checkbox")

    expect(orderButton).toBeDisabled()

    expect(checkBox).not.toBeChecked()

    await userEvent.click(checkBox)

    expect(orderButton).toBeEnabled()

    await userEvent.click(checkBox)

    expect(orderButton).toBeDisabled()
})

test("Onayla butonu hover olunca bildirim çıkar", async()=>{
  render(<Form/>)
  const user = userEvent.setup()
  const orderButton = screen.getByRole("button")
  const popUp = screen.getByText("Size gerçekten bir şey", {exact:false})
  const checkBox = screen.getByRole("checkbox") 
  
  await user.click(checkBox)

  fireEvent.mouseEnter(orderButton)

  expect(popUp).toBeVisible()

  fireEvent.mouseLeave(orderButton)

  expect(popUp).not.toBeVisible()

})