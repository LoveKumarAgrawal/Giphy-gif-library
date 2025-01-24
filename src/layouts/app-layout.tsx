import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return <div className="bg-gray-950">
        {/* Header will go here*/}
        <main>
            <Outlet />
        </main>
    </div>
}

export default AppLayout