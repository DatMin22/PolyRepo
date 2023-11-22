import React from 'react'

export const RoleTable = () => {
  return (
    <div className='p-4 sm:ml-64'>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    // userList?.map((user) => {
                    //     return (
                    //         <tr key={user.id}
                    //             className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                    //             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.id}</th>
                    //             <td className='px-6 py-4 text-xl'>{user.name}</td>
                    //             <td className='px-6 py-4 text-xl'>{user.email}</td>
                    //             <td className='px-6 py-4 text-xl'>{user.roleId}</td>
                    //             <td className='px-6 py-4 text-xl'>
                    //                 <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-lg px-3 py-2.5 text-center me-2 mb-2"
                    //                     onClick={() => {
                    //                         dispatch(adminActions.setUserEdit(user))
                    //                     }}><i className="fa-solid fa-marker"></i>Edit</button>
                    //                 <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-lg text-lg px-3 py-2.5 text-center me-2 mb-2"
                    //                     onClick={() => {
                    //                         dispatch(adminActions.deleteUser(user.id))
                    //                     }}><i className="fa-solid fa-trash"></i>Disable</button>
                    //             </td>

                    //         </tr>
                    //     )
                    // })
                }


            </tbody>
        </table>
    </div>
</div>
  )
}
