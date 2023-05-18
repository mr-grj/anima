import { Toast } from ".";

export default {
  title: "Components/Toast",
  component: Toast,
};

export const Default = {
  args: {
    type: "Warning",
    device: "Mobile",
    action: "Yes",
    style: {},
    checkVector: "/img/vector-105.png",
    text: "This is an informational toast",
  },
};
