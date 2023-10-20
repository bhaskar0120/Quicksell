export default function Format(apiData, group, order) {
    console.log(apiData)
    let final_list = {}
    if(group == "Status"){
        // backlog todo in progress done canceled
        const _names = ["Backlog", "Todo", "In progress", "Done", "Canceled"]
        for(let i = 0; i < _names.length; i++){
            final_list[_names[i]] = {
                header : _names[i],
                tickets: []
            }
        }

        for(let i = 0; i < apiData.tickets.length; i++){

            final_list[apiData.tickets[i].status].tickets.push(apiData.tickets[i]);
        }
    }
    else if(group == "User"){
        for(let i = 0; i < apiData.users.length; i++){
            final_list[apiData.users[i].id] = {
                header: apiData.users[i].name,
                tickets: []
            }
        }
        for(let i = 0; i < apiData.tickets.length; i++){
            final_list[apiData.tickets[i].userId].tickets.push(apiData.tickets[i]);
        }
    }
    else if(group == "Priority"){
        const _names = ["No Priority", "Low", "Medium", "High", "Urgent"]
        for(let i = 0; i < _names.length; i++){
            final_list[i] = {
                header : _names[i],
                tickets: []
            }
        }
        for(let i = 0; i < apiData.tickets.length; i++){
            final_list[apiData.tickets[i].priority].tickets.push(apiData.tickets[i]);
        }
    }
    if(order == "Priority"){
        for(let elem in final_list){
            final_list[elem].tickets.sort((a,b)=>{
                return b.priority - a.priority;
            })
        }
    }
    else if(order == "Title"){
        for(let elem in final_list){
            final_list[elem].tickets.sort((a,b)=>{
                return a.title.localeCompare(b.title);
            })
        }
    }

    console.log(final_list)

    return final_list;
}