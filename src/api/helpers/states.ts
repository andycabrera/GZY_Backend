export default [
    {
        name: "PENDIENTE",
        next: "FINALIZADO",
        previus: "PENDIENTE"
    },
    {
        name: "FINALIZADO",
        next: "FINALIZADO",
        previus: "PENDIENTE"
    }
]