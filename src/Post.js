function Post({name})
{
return(
    <div>
          <table>
            {
                name.map((item,i)=>(
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td><img src={item.avatar} alt="Girl in a jacket" width="150" height="150"></img></td>

                        
                    </tr>
                ))
            }
        </table>
    </div>
)
}
export default Post