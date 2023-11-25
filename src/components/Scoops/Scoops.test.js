
import Scoops from ".";
import userEvent from "@testing-library/user-event";
import {render,screen} from "@testing-library/react"

test("API'den gelen her bir veri için ekrana kart basılması",async()=>{
    render (<Scoops/>)

    const images =  await screen.findAllByRole("img")
    expect(images).toHaveLength(4)
    
})

test("Çeşit ekleme işleminin fiyata yansıması",async()=>{
    render(<Scoops/>)
    const user = userEvent.setup()

    const total = screen.getByTestId("toplam")
    const buttons =await screen.findAllByRole("button", {name:"Ekle"})
    const deleteButtons = await screen.findAllByRole("button", {name:"Sıfırla"})

    await user.click(buttons[0])

    expect(total).toHaveTextContent("20")

    await user.dblClick(buttons[1])

    expect(total).toHaveTextContent("60")

    await user.click(deleteButtons[0])

    expect(total).toHaveTextContent("40")

    await user.click(deleteButtons[2])

    expect(total).toHaveTextContent("40")

})