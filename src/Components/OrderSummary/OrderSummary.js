import { useAuth } from "../../Context/AuthContext";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Header from "../../Header";
import Footer from "../../Footer";
import TopBar from "../../TopBar";
import CartSummary from "./CartSummary";
import UserSummary from "./UserSummary";

function OrderSummary({ route }) {
    const globalState = useContext(CartContext);
    const cartData = globalState.items;
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(2);

    useEffect(() => {
        if (!currentUser) {
            navigate('/acasa');
        }
        if (!cartData.length) {
            navigate('/cart');
        }

        const progress = document.getElementById("progress");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");
        const circles = document.querySelectorAll(".circle");
        let currentActive = 2;

        next.addEventListener("click", () => {
            currentActive++;
            if (currentActive > circles.length) currentActive = circles.length;
            update();
        });
        prev.addEventListener("click", () => {
            if (currentActive === 2) {
                navigate('/cart');
            }
            currentActive--;
            if (currentActive < 1) currentActive = 1;
            update();
        });

        const update = () => {
            circles.forEach((circle, index) => {
                if (index < currentActive) {
                    circle.classList.add("active");
                    if (index === currentActive - 1) {
                        circle.innerHTML = `
                            <span class="progressNumber">${index + 1}</span>
                          `;
                    } else {
                        circle.innerHTML = `
                    <span class="progressIcon"><iconify-icon icon="charm:tick" width="20" height="20"></iconify-icon></span>
                  `;
                    }
                } else {
                    circle.classList.remove("active");
                    circle.innerHTML = `<span class="progressNumber">${index + 1}</span>`;
                }
            });
            setCurrentStep(currentActive);

            const actives = document.querySelectorAll(".active");
            progress.style.width =
                ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
            if (currentActive === 1) prev.disabled = true;
            else if (currentActive === circles.length) next.disabled = true;
            else {
                prev.disabled = false;
                next.disabled = false;
            }
            if (currentActive === 3) next.hidden = true;
            else next.hidden = false;
        };
        update();
    }, [currentUser, navigate, cartData]);
    return (
        <>
            <TopBar></TopBar>
            <Header></Header>
            <div style={{ width: "70%", marginTop: "80px" }} className="container">
                <div style={{ margin: "auto" }} className="progress-container">
                    <div className="progress" id="progress"></div>
                    <div className="circle active">
                        <span className="progressNumber">1</span>
                        <span className="progressIcon" style={{ display: 'none' }}><iconify-icon icon="charm:tick" width="20" height="20"></iconify-icon></span>
                    </div>
                    <div className="circle">
                        <span className="progressNumber">2</span>
                        <span className="progressIcon" style={{ display: 'none' }}><iconify-icon icon="charm:tick" width="20" height="20"></iconify-icon></span>
                    </div>
                    <div className="circle">
                        <span className="progressNumber">3</span>
                        <span className="progressIcon" style={{ display: 'none' }}><iconify-icon icon="charm:tick" width="20" height="20"></iconify-icon></span>
                    </div>
                </div>
                <div style={{ color: "gray", width: "80%", marginTop: "40px", marginBottom: " 30px" }} className="container">
                    {(currentStep === 2 && cartData) && <CartSummary cartData={cartData}></CartSummary>}
                    {(currentStep === 3 && cartData) && <UserSummary cartData={cartData}></UserSummary>}
                    <div className="mt-4">
                        <button className="btn-progress m-3" id="prev" disabled><span style={{ paddingRight: "8px" }}>&lt;</span>Inapoi</button>
                        <button className="btn-progress m-3" id="next">Inainte<span style={{ paddingLeft: "8px" }}>&gt;</span></button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default OrderSummary;
