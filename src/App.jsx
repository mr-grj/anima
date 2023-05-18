import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MyPets } from "./screens/MyPets";
import { ReportResults } from "./screens/ReportResults";
import { Notification } from "./screens/Notification";
import { AddNewPet } from "./screens/AddNewPet";
import { MyPetsSeveralPets } from "./screens/MyPetsSeveralPets";
import { EditPetDetails } from "./screens/EditPetDetails";
import { RequestNewKit } from "./screens/RequestNewKit";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <MyPets />,
  },
  {
    path: "/my-pets-1pet",
    element: <MyPets />,
  },
  {
    path: "/report-results",
    element: <ReportResults />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/add-new-pet",
    element: <AddNewPet />,
  },
  {
    path: "/my-pets-several-pets",
    element: <MyPetsSeveralPets />,
  },
  {
    path: "/edit-pet-details",
    element: <EditPetDetails />,
  },
  {
    path: "/request-new-kit",
    element: <RequestNewKit />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
