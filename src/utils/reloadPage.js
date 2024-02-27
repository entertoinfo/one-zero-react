import { useState } from "react";
import GameContainer from "../components/GameContainer/GameContainer";

function HandleRefresh() {
  document.location.reload();
}

// Поки не активний код, хочу реалізувати перещавантаження GameContainer, а не всієї сторінки, 
// але перед цим потрібно реалізувати зміну рівня(я так думаю)
// const [value, setValue] = useState();
// const Refresh = () => {
//     setValue(20);
// };

export default HandleRefresh;
