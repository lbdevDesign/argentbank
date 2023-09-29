import './Global.css';
import Header from '../componants/header/headerAccount.js';
import AccountSection from '../componants/accountSection/accountSection.js';
import Footer from '../componants/footer/footer.js';
import { login } from '../redux/auth/authActions.js';
import authReducer from '../redux/auth/authReducer.js';
import store from "../redux/store";


function Account() {

    const user = localStorage.getItem('user');
    if (!user) {
        document.location.href = '/sign-in';
    }
    authReducer(null, login(JSON.parse(user).userName, JSON.parse(user).token));
    store.dispatch(login(JSON.parse(user).userName, JSON.parse(user).token));

  return (
    <>
        <Header />
        <main class="main bg-dark">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
            <AccountSection
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                amountDescription="Available Balance"
            />
            <AccountSection
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                amountDescription="Available Balance"
            />
            <AccountSection
                title="Argent Bank Credit Card (x8349"
                amount="$184.30"
                amountDescription="Current Balance"
            />
        </main>
        <Footer />
    </>
  );
}

export default Account;