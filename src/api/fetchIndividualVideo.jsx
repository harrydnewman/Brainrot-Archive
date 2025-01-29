
export default async function fetchIndividualVideo(){
    try {
        const response = await fetch("https://api.brainrot.harrydnewman.com/api/");
        const responseData = await response.json();
        console.log("ResponseData:", responseData);
        return responseData;
    } catch (error){
        console.error("Error fetching video:", error);
    }
}