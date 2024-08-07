import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Chat from "./Chat"
import Modal from "react-modal";
import "./Greetings.css";

const Greetings = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [escortModalIsOpen, setEscortModalIsOpen] = useState(false);

  const openModal = (transactionId) => {
    setSelectedTransaction(transactionId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openEscortModal = () => {
    setEscortModalIsOpen(true);
  };

  const closeEscortModal = () => {
    setEscortModalIsOpen(false);
  };

  const menuItems = [
    {
      id: 1,
      label: "my orders",
      text: "MY ORDERS",
      icon: (
        <svg
          className="menu-icon"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1167 10.175L11.0792 23.8273L24.7315 1.31946"
            stroke="white"
            strokeWidth="1.47593"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "transactions",
      text: "TRANSACTIONS",
      icon: (
        <svg
          className="menu-icon"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.4677 15.981H0.902832V0.923157H22.2894V12.7076"
            stroke="white"
            strokeWidth="0.872921"
          />
          <path
            d="M17.8155 8.77945H5.48547M5.48547 8.77945L8.43158 5.61511M5.48547 8.77945L8.43158 11.8347"
            stroke="white"
            strokeWidth="0.872921"
          />
          <path
            d="M12.36 22.0915H24.4718M24.4718 22.0915L22.1804 25.2558M24.4718 22.0915L22.1804 18.9271M28.9455 29.2931V14.6716H8.21362V29.2931H28.9455Z"
            stroke="white"
            strokeWidth="0.872921"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "special opportunities",
      text: "SPECIAL OPPORTUNITIES",
      icon: (
        <svg
          width="28"
          height="37"
          viewBox="0 0 30 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4615 20.8607C17.1241 20.8 16.9047 20.7921 16.6099 20.9671C16.2803 21.1628 16.0765 21.4355 16.0775 21.8188C16.0784 22.1382 16.1602 22.5203 16.3969 22.9899C16.7039 23.5989 16.9652 23.9064 17.4616 24.374C18.1935 25.0635 19.6973 25.6516 19.6973 25.6516C19.6973 25.6516 19.5646 36.462 19.8038 36.9368C19.9111 37.1497 20 37.3829 20.2296 37.5756C20.5018 37.8039 20.7262 37.89 21.0814 37.895C21.384 37.8992 21.5743 37.8493 21.8266 37.6821C22.1247 37.4845 22.2722 37.2838 22.3589 36.9368C22.4654 36.511 22.4654 30.7619 22.4654 30.7619H23.2107C23.2107 30.7619 23.1492 36.511 23.3171 36.8303C23.4997 37.1775 23.526 37.4601 23.8494 37.6821C24.1321 37.8761 24.2761 37.895 24.7012 37.895C24.9801 37.895 25.2259 37.7453 25.4472 37.5756C25.705 37.3781 25.7261 37.2268 25.8723 36.9368C25.9796 36.7239 25.8723 26.6097 25.8723 26.6097C25.8723 26.6097 26.003 26.5973 26.0852 26.6097C26.5663 26.6827 26.4417 27.2992 26.5111 27.7809C26.6183 28.5261 26.6448 29.7524 26.724 29.9101C26.9377 30.336 27.2819 30.6554 27.7894 30.6554C28.2153 30.6554 28.4028 30.3003 28.5339 29.9101C28.6412 29.5908 28.8089 28.124 28.5339 27.0356C28.2282 25.8256 27.899 25.0624 26.9369 24.2675C26.495 23.9024 26.2305 23.8494 25.6729 23.7378L25.6602 23.7352C25.1287 23.6288 22.962 23.8753 21.2943 23.5223C20.8305 23.4241 20.5595 23.3883 20.1232 23.2029C19.6769 23.0133 19.4173 22.8902 19.0585 22.5641C18.6148 22.1607 18.6434 21.6975 18.2068 21.2865C17.9464 21.0414 17.8135 20.9239 17.4615 20.8607Z"
            stroke="#FEFEFE"
            strokeWidth="0.737963"
          />
          <path
            d="M1.38612 12.2353C1.38612 12.2353 0.64094 20.6462 0.640869 20.859C0.640585 21.7175 1.09557 22.4786 1.91844 22.4559C2.62621 22.4364 3.1849 22.0629 3.40895 21.3913C3.51549 21.0719 4.04773 13.5129 4.04773 13.5129C4.04773 13.5129 4.2678 13.1641 4.47359 13.1935C4.64822 13.2184 4.79299 13.5129 4.79299 13.5129C4.79299 13.5129 4.68652 36.3362 4.79307 36.5093C4.89961 36.6825 5.19499 37.2888 5.6447 37.5739C5.97785 37.785 6.10207 37.7893 6.4965 37.7869C6.94429 37.7841 7.33388 37.7661 7.66753 37.4674C7.98648 37.1819 8.09339 36.8285 8.19985 36.5092C8.30631 36.1899 8.19985 23.5206 8.19985 23.5206H9.2645C9.2645 23.5206 9.26458 36.2432 9.37096 36.5092C9.56867 37.0036 9.75479 37.3198 10.2227 37.5739C10.524 37.7375 10.7318 37.7983 11.0745 37.7869C11.377 37.7768 11.8065 37.7768 12.1391 37.361C12.4717 36.9453 12.5648 36.7221 12.6714 36.5092C12.7779 36.2964 12.6714 13.5129 12.6714 13.5129C12.6714 13.5129 12.8894 13.1975 13.0972 13.1935C13.397 13.1876 13.5231 13.8323 13.5231 13.8323C14.1883 16.41 14.9038 19.475 15.0137 19.9008C15.1236 20.3267 16.0915 20.6965 16.6106 20.4332C17.0855 20.1923 17.4623 19.901 17.4623 19.3685C17.4623 18.9428 16.2452 12.5548 16.0783 12.2354C15.6191 11.3564 15.5163 10.7928 14.8007 10.1061C14.1011 9.43464 13.2662 9.04312 12.7339 8.93661L4.68652 8.935C4.68652 8.935 3.23958 9.47388 2.55723 10.2126C1.9264 10.8955 1.38612 12.2353 1.38612 12.2353Z"
            stroke="white"
            strokeWidth="0.737963"
          />
          <circle
            cx="8.83844"
            cy="4.03925"
            r="3.35728"
            stroke="white"
            strokeWidth="0.737963"
            fill="none"
          />
          <circle
            cx="22.7854"
            cy="19.4766"
            r="2.61203"
            stroke="white"
            strokeWidth="0.737963"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: 4,
      label: "help center",
      text: "HELP CENTER",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1612 4.73904C10.9434 3.89355 7.31524 0.438416 6.68126 0.51133C6.04724 0.584248 5.64121 0.642741 5.13052 1.01866C4.44127 1.52601 3.14993 2.49375 2.20132 3.89353C1.81765 4.45967 1.53992 4.76456 1.3398 5.41551C1.06768 6.30067 1.09118 7.03057 1.16753 7.95211C1.41971 10.9961 3.16534 14.2489 5.81974 17.4222C8.88734 21.0895 12.8841 23.5774 15.9857 24.3556C17.2397 24.6703 17.9651 24.863 19.2595 24.863C20.2932 24.863 20.9019 24.3807 21.844 23.8483C23.5759 22.8697 25.413 21.1426 25.4624 20.297C25.4935 19.7655 25.4196 19.4612 25.2901 18.9442C25.0784 18.0986 21.8822 14.8505 21.1547 14.7164C20.4272 14.5824 19.9809 14.5542 19.2595 14.7164C18.7425 14.8327 16.3303 17.084 16.3303 17.084L8.57651 9.30501C8.57651 9.30501 11.278 6.76869 11.3335 6.43013C11.4409 5.77485 11.3269 5.38251 11.1612 4.73904Z"
            stroke="white"
            strokeWidth="0.737963"
          />
        </svg>
      ),
    },
    {
      id: 5,
      label: "profile settings",
      text: "PROFILE SETTINGS",
      icon: (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0208 4.89308L11.349 4.80706L11.4461 4.48193L12.3277 1.52983L14.9273 1.59811L15.366 4.53228L15.4109 4.83269L15.6789 4.97562L17.5315 5.96351L17.8423 6.12928L18.1396 5.94014L20.8691 4.20312L22.8405 6.17957L21.0613 8.5922L20.8791 8.83934L20.9715 9.13216L21.5909 11.094L21.6968 11.4295L22.041 11.5027L25.1526 12.1638L25.0796 14.9409L21.9015 15.6183L21.5914 15.6844L21.4699 15.9772L20.7537 17.7027L20.6308 17.9988L20.8072 18.2664L22.4679 20.785L20.3605 22.8334L18.0679 21.2358L17.8191 21.0624L17.5315 21.1585L15.298 21.9049L14.897 22.0389L14.8859 22.4615L14.8084 25.4114L11.4872 25.3242L10.9899 22.2473L10.9364 21.9159L10.6267 21.7866L8.5695 20.9275L8.27425 20.8042L8.00648 20.9794L5.71705 22.477L3.71462 20.8168L5.38239 18.2322L5.53604 17.9941L5.45099 17.7238L4.76987 15.5591L4.64058 15.1482L4.20996 15.1369L1.2601 15.0594L1.35261 11.537L4.42951 11.0398L4.7635 10.9858L4.89175 10.6727L5.68028 8.74785L5.79647 8.46423L5.63602 8.20308L4.0769 5.66541L5.84057 3.80106L8.46289 5.37548L8.68077 5.50629L8.9266 5.44187L11.0208 4.89308Z"
            stroke="white"
            strokeWidth="1.20718"
          />
          <circle
            cx="13.2448"
            cy="13.4286"
            r="3.99039"
            transform="rotate(1.50448 13.2448 13.4286)"
            stroke="white"
            strokeWidth="1.14011"
          />
        </svg>
      ),
    },
  ];

  const handleItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    
    <div className="greetings-container">
      <Chat/>
      <div className="user-info">
        <div className="username">Aleksandr Kochal</div>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={selectedMenuItem?.id === item.id ? "active" : ""}
            >
              <div className="orange-circle">{item.icon}</div>
              <span className="menu-text">{item.text}</span>
            </li>
          ))}
        </ul>
        <a href="/" className="home-link">
          Home
        </a>
        
      </div>
      <div className="content">
        <div className="greeting-photo">
          {!selectedMenuItem ? (
            <>
              <div className="welcome-text">WELCOME</div>
              <div className="user-photo"></div>
            </>
          ) : selectedMenuItem.label === "my orders" ? (
            <>
              <div className="selected-item-text">{selectedMenuItem.text}</div>
              <div className="placeholder-div">
                <div className="myorders__inner-div" id="myoreders__div1">
                  <h2>DATE</h2>
                  <h2>SERVICE</h2>
                  <h2>AIRPORT</h2>
                  <h2>STATUS</h2>
                </div>
                <div className="myorders__inner-div" id="myoreders__div2">
                  <h2>09/08/2023</h2>
                  <h2>FAST TRACK</h2>
                  <h2>DUBAI INTERNATIONAL (DXB)</h2>
                  <h2>DELAYED</h2>
                </div>
                <div className="myorders__inner-div" id="myoreders__div3">
                  <h2>09/08/2023</h2>
                  <h2>FAST TRACK</h2>
                  <h2>DUBAI INTERNATIONAL (DXB)</h2>
                  <h2>IN PROGRESS</h2>
                </div>
                <div className="myorders__inner-div" id="myoreders__div4">
                  <h2>09/08/2023</h2>
                  <h2>FAST TRACK</h2>
                  <h2>DUBAI INTERNATIONAL (DXB)</h2>
                  <h2>IN PROGRESS</h2>
                </div>
              </div>
            </>
          ) : selectedMenuItem.label === "transactions" ? (
            <>
              <div className="selected-item-text">{selectedMenuItem.text}</div>
              <div className="placeholder-div transactions-div">
                <div className="transaction__inner-div" id="transaction__div1">
                  <h2>DATE</h2>
                  <h2>TRANSACTION</h2>
                  <h2>TOTAL</h2>
                  <h2>STATUS</h2>
                </div>
                <div
                  className="transaction__inner-div"
                  id="transaction__div2"
                  onClick={() => openModal("transaction__div2")}
                >
                  <h2>08/09/2023</h2>
                  <h2>F456CGDFK09883</h2>
                  <h2>320,000</h2>
                  <h2>PENDING</h2>
                </div>
                <div
                  className="transaction__inner-div"
                  id="transaction__div3"
                  onClick={() => openModal("transaction__div3")}
                >
                  <h2>08/09/2023</h2>
                  <h2>F456CGDFK09883</h2>
                  <h2>320,000</h2>
                  <h2>PENDING</h2>
                </div>
              </div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Transaction Details Modal"
                className="transaction-modal"
              >
                {selectedTransaction && (
                  <div className="transaction__modal-wrapper">
                    <div className="transaction__modal-upper">
                      <h2 style={{ margin: "0", padding: "0" }}>INVOICE</h2>
                      <button
                        className="transaction__close-button"
                        onClick={closeModal}
                      >
                        &times;
                      </button>
                    </div>
                    <div className="transaction__modal-middle">
                      <p>Date</p>
                      <p>Total</p>
                      <p>Payment Type</p>
                      <p>Status</p>
                    </div>
                    <svg
                      className="transaction-svg"
                      width="435"
                      height="2"
                      viewBox="0 0 435 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="1"
                        x2="435"
                        y2="1"
                        stroke="#B78D5F"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="transaction__modal-lower">
                      <p>08/09/2023</p>
                      <p style={{ marginLeft: "25px", color: "#B78D5F" }}>
                        229,000
                      </p>
                      <p>VISA CARD ≠≠≠ ≠≠≠≠ 8921</p>
                      <p>PENDING</p>
                    </div>

                    <button className="transaction-button" onClick={closeModal}>
                      COMPLETE PAYMENT
                    </button>
                  </div>
                )}
              </Modal>
            </>
          ) : selectedMenuItem.label === "special opportunities" ? (
            <>
              <div className="selected-item-text">{selectedMenuItem.text}</div>
              <div className="placeholder-div transactions-div">
                <div className="special-wrapper">
                  <button
                    className="special-button"
                    style={{ marginBottom: "25px" }}
                  >
                    CHAT WITH MANAGER
                  </button>
                  <button
                    className="special-button"
                    id="special__button-escort"
                    onClick={openEscortModal}
                  >
                    ESCORT SERVICE
                  </button>
                </div>
              </div>
              <Modal
                isOpen={escortModalIsOpen}
                onRequestClose={closeEscortModal}
                contentLabel="Escort Service Modal"
                className="escort-modal"
              >
                <div className="escort-modal-content">
                  <h2>ESCORT SERVICE</h2>
                  <p>
                    We offer personalised travel assistance to ensure your
                    comfort and safety during your holiday. Our professional
                    guides and assistants are ready to provide you with full
                    support throughout your journey.
                  </p>
                  <div className="transaction__link-wrapper">
                    <HashLink to="/#services">More...</HashLink>
                    <button
                      className="transaction__close-button"
                      onClick={closeEscortModal}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.3329 8.08227C17.3986 8.08227 17.4478 8.2135 17.4806 8.47597C17.5462 8.70563 17.579 8.9681 17.579 9.26337C17.579 9.55865 17.5462 9.83752 17.4806 10.1C17.4478 10.3625 17.3986 10.4937 17.3329 10.4937H10.394V17.3835C10.394 17.4491 10.2463 17.5147 9.95106 17.5803C9.65578 17.6131 9.3441 17.6295 9.01602 17.6295C8.32704 17.6295 7.98255 17.5803 7.98255 17.4819V10.4937H1.09279C1.02717 10.4937 0.961552 10.3625 0.895935 10.1C0.863127 9.83752 0.846723 9.54224 0.846723 9.21416C0.846723 8.91888 0.863127 8.65642 0.895935 8.42676C0.928744 8.1971 0.977956 8.08227 1.04357 8.08227H7.98255V1.1925C7.98255 1.12689 8.11379 1.07767 8.37625 1.04486C8.63872 0.979248 8.91759 0.946439 9.21287 0.946439C9.50814 0.946439 9.77061 0.979248 10.0003 1.04486C10.2627 1.07767 10.394 1.12689 10.394 1.1925V8.08227H17.3329Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Modal>
            </>
          ) : selectedMenuItem.label === "help center" ? (
            <>
              <div className="selected-item-text">{selectedMenuItem.text}</div>
              <div className="placeholder-div transactions-div">
                <h2 style={{ color: "white" }}>UNDER DEVELOPMENT</h2>
              </div>
            </>
          ) : selectedMenuItem.label === "profile settings" ? (
            <>
              <div className="selected-item-text">{selectedMenuItem.text}</div>
              <div
                className="placeholder-div transactions-div"
                style={{ background: "white" }}
              >
                <form className="user-profile-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label></label>
                      <input type="text" value="FIRST NAME" />
                    </div>
                    <div className="form-group">
                      <label></label>
                      <input
                        type="text"
                        value="LASTNAME"
                        style={{ marginLeft: "67px" }}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label></label>
                      <input type="text" value="PHONE" />
                    </div>
                    <div className="form-group">
                      <label></label>
                      <input
                        type="email"
                        value="EMAIL"
                        style={{ marginLeft: "67px" }}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group-column">
                      <label>PASSWORD</label>
                      <input type="password" name="password" />
                      <label>NEW PASSWORD</label>
                      <input type="password" name="newPassword" />
                      <label>CONFIRM PASSWORD</label>
                      <input type="password" name="confirmPassword" />
                    </div>

                    <div
                      className="form-group-column"
                      style={{ marginLeft: "70px" }}
                    >
                      <label>RECEIVE NOTIFICATIONS BY:</label>
                      <div className="form-checkboxes">
                        <label>
                          <input
                            type="checkbox"
                            name="receiveNotificationsByPhone"
                          />
                          Phone
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="receiveNotificationsByEmail"
                            style={{ marginLeft: "43px" }}
                          />
                          Email
                        </label>
                      </div>
                      <div className="form-buttons">
                        <button type="button" className="form__update-button">
                          UPDATE
                        </button>
                        <button
                          type="submit"
                          className="form__save-button"
                          style={{ marginLeft: "40px" }}
                        >
                          SAVE
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Greetings;
