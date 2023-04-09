const Employee = require('./models/Employee')
const Users = require('./models/Users')

exports.resolvers = {
    Query: {
        login: async(parent, args) => {
            console.log("login0", args);
            const user = await Users.findOne({username: args.username, email: args.email, password: args.password})
            console.log("user", user)
            return user;
        },
        getAllEmployees: async(parent, args) => {
            return await Employee.find({})
        },
        searchEmployeeByEid: async(parent, args) => {
            return await Employee.findById(args.id)
        }
    },

    Mutation: {
        signUp: async (parent, args) => {
            console.log(args)

            let signUpUser = new Users({
                username: args.username,
                password: args.password,
                email: args.email,
            })
            return signUpUser.save()
        },
        addNewEmployee: async(parent,args) => {
            console.log(args)

            let NewEmployee = new Employee({
                first_name: args.first_name,
                last_name: args.last_name,
                email: args.email,
                gender: args.gender,
                salary: args.salary
            })
            return NewEmployee.save()
        },
        updateEmployeeByEid: async(parent, args) => {
            console.log(args)
            if(!args.id) {
                return;
            }

            return await Employee.findOneAndUpdate(
                {
                    _id: args.id
                },
                {
                    $set: {
                        first_name: args.first_name,
                        last_name: args.last_name,
                        email: args.email,
                        gender: args.gender,
                        salary: args.salary
                    }
                }
            )
        },
        deleteEmployeeByEid: async(parent, args) => {
            console.log(args)
            if(!args.id) {
                return JSON.stringify({
                    status: false,
                    "message": "Employee Removed"
                });
               
            }
            return await Employee.findOneAndDelete({ _id: args.id})
        }
    }
}