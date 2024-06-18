import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from  "./Pages/Home";
import Example from "./Pages/Example" ;


export default function App() {
    return (
      <>
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">ИгроваяЛавка</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a href="/Example" className="nav-link active" aria-current="page" >Пример</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link" >Ссылка</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Выпадающий список
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="/" className="dropdown-item" >Действие</a></li>
                            <li><a href="/" className="dropdown-item" >Другое действие</a></li>
                            <li><a href="/" className="dropdown-item" >Что-то еще здесь</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link disabled">Отключенная</a>
                    </li>
                </ul>
                </div>
            </div>
        </header>
        <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Example' element={<Example />}/>
        </Routes>
        </Router>
      </>
    );
}
  