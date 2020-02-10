// containerPath will always be relative to src

/*
  {
    path: string,
    exact: oneOf([true, false]),
    routeComponentParent: oneOf(["containers", "components", "UIComponents", "common"]),
    routeComponentPath: string,
    isAuthenticated: oneOf([true, false])
  }
*/

const routes = {
  // LOGIN: {
  //   path: "/",
  //   exact: true,
  //   routeComponentParent: "containers",
  //   routeComponentPath: "LoginContainer"
  // },
  // REGISTER: {
  //   path: "/register",
  //   routeComponentParent: "containers",
  //   routeComponentPath: "RegisterContainer"
  // },
  // CONFIRM: {
  //   path: "/confirm",
  //   routeComponentPath: "App"
  // },
  // FORGOT: {
  //   path: "/forgot",
  //   routeComponentPath: "App"
  // },
  // RESET: {
  //   path: "/reset",
  //   routeComponentPath: "App"
  // }
  HOME: {
    path: "/",
    isAuthenticated: true,
    routeComponentParent: "containers",
    routeComponentPath: "HomeContainer"
  }
};

export default routes;
