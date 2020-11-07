export default [
    {
        name: "PENDIENTE",
        next: "FINALIZADO",
        previus: null
    },
    {
        name: "FINALIZADO",
        next: null,
        previus: "PENDIENTE"
    }
]