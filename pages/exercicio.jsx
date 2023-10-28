export default function produtos() {
    return (
        <>
            <form action="">
                <h1>Cadastro de produtos</h1>
                <br />
                <label htmlFor="">Nome: </label>
                <input type="text" required />
                <br />
                <label htmlFor="">Descrição: </label>
                <br />
                <textarea name="" id="" cols="25" rows="10" required></textarea>
                <br />
                <label htmlFor="">Preço: </label>
                <input type="number" name="" id="" />
                <br />
                <label htmlFor="">Categoria: </label>
                <select name="" id="" required>
                    <option value="">ComboBox</option>
                    <option value="">Eletrônicos</option>
                    <option value="">Roupas</option>
                    <option value="">Alimentos</option>
                    <option value="">Outros</option>
                </select>
                <br />
                <button>Cadastrar</button>
            </form>
        </>
    )
}