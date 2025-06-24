import Header from "../../../components/Header";

const dashboard = () => {
    const user = {
        name: "Aymen Hmani",
    }
    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? "Guest"}`}
                description="Here you can manage your travel agency, view bookings, and more."
            />
        </main>
    )
}

export default dashboard