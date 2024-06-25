import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import { getLoggedInUser } from "@/lib/actions/user.actions"

const Home = async () =>{
    const loggedIn = await getLoggedInUser();

    return(
        <section className="home">
            <div className="home-content">
                <header>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || 'Guest'}
                        subtext="Access and manage your account and transactions effieciently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={5000.35}
                    />

                </header>
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 2000.35}, {currentBalance: 234.69}]}
            />
        </section>
    )
}

export default Home