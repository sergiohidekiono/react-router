// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             { index: true, element: <Inicio /> },
//             {
//                 path: "/info",
//                 children: [
//                     { path: "sobre", element: <Sobre /> },
//                     { path: "contato", element: <Contato /> },
//                 ],
//             },
//         ],
//     },
// ]);

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<Layout />}>
//             <Route index element={<Inicio />} />
//             <Route path="inicio" element={<Inicio />} />
//             <Route path="info">
//                 <Route path="sobre" element={<Sobre />} />
//                 <Route path="contato" element={<Contato />} />
//             </Route>
//         </Route>
//     )
// );