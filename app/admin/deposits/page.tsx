import DepositTable from "@/components/admin/DepositTable";


export default function DepositsPage(){

return (

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">
Deposit Management
</h1>


<DepositTable />


</div>

);

}