import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class departments extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    department_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    department_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'employee_id'
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'departments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "departement_id_pk",
        unique: true,
        fields: [
          { name: "department_id" },
        ]
      },
    ]
  });
  }
}
