export default ({ route }) => {
  console.log("route middleware");
  console.log({
    path: route.path,
    name: route.name,
    params: route.params,
    query: route.query,
  });
};
