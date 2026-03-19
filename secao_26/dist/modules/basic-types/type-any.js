export function handleFileUpload(file) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.zise}`);
}
const file = {
    name: 'lista_de_funcionarios.txt',
    size: 456123789
};
handleFileUpload(file);
