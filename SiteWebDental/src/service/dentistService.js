import { supabase } from "@/lib/Supabase"

export async function fetchDentists(){
  const { data, error } = await supabase
    .from('dentistes')
    .select('nom, specialite, images')

    if (error) {
      throw error
    }
    return data
}
