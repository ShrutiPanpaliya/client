export async function registerUser(data)
{
    const response = await fetch('/api/register',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({user:data})
    });
    return await response.json();
    

}