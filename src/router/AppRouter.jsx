import  CodePage  from "../pages/CodePage";
import  DatesPage  from "../pages/DatesPage";
import  HomePage  from "../pages/HomePage";
import  WorksPage  from "../pages/WorksPage";
import  PhasesPage  from "../pages/PhasesPage";
import  FormPage  from "../pages/FormPage";

export const router = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/code",
        element: <CodePage />,
    },
    {
        path: "/dates",
        element: <DatesPage />,
    },
    {
        path: "/form",
        element: <FormPage />,
    },
    {
        path: "/phases",
        element: <PhasesPage />,
    },
    {
        path: "/works",
        element: <WorksPage />,
    },
]