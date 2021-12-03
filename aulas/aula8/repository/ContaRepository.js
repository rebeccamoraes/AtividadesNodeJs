import ContaTable from "../db/ContaTable";

class ContaRepository {
    async findAll() {
        return await ContaTable.findAll({raw: true});
    }

    async create(model) {
        return await ContaTable.create(model);
    }

    async update(model) {
        return await ContaTable.update(model, {
            wherer: { id: conta1.id}
        });
    }

    async delete(id) {
        return await ContaTable.destroy({
            where: {id: 1}
        });
    }
}