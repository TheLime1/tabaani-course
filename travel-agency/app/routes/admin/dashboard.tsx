import Header from "../../../components/Header";
import TripCard from "../../../components/TripCard";
import StatsCard from "../../../components/StatsCard";

const dashboard = () => {
  const user = {
    name: "Aymen Hmani",
  };

  const dashboardStats = {
    totalUsers: 100,
    usersJoined: { currentMonth: 10, lastMonth: 8 },
    totalTrips: 50,
    tripsCreated: { currentMonth: 5, lastMonth: 3 },
    userRoles: { total: 60, currentMonth: 6, lastMonth: 4 },
  };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Here you can manage your travel agency, view bookings, and more."
      />
      <StatsCard />
      <TripCard />
    </main>
  );
};

export default dashboard;
