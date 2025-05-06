import { ButtonAdd } from "../components/body/buttonAdd";
import { ButtonClose } from "./buttonClose";

export const addTask = () => {
  return(
    <>
      <input type="text" />
      <input type="text" />
      <div>
        <ButtonClose />
        <ButtonAdd />
      </div>
    </>
  )
}