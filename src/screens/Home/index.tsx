import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { client } from "../../lib/axios-client";
import { useEffect, useState } from "react";
import Feather from "@expo/vector-icons";

type Company = {
  id: string;
  nome: string;
  cnpj: string;
  valor_solicitado: string;
};

export function Home() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const getCompanies = async () => {
    try {
      const { data } = await client.get("/companies");
      setCompanies(data.filter(filterCompanies));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  const filterCompanies = (company: Company) => {
    return true;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventWelcome}>Seja bem-vindo</Text>
      <Text style={styles.eventName}>Alex Sanchez</Text>

      <View style={styles.buttonSection}>
        <Text style={styles.eventTitle}>Oportunidades</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchSection}>
        <TextInput style={styles.input} />

        <Icon
          style={styles.searchIcon}
          name="search"
          size={20}
          color="#D9D9D9"
        />
      </View>

      <FlatList
        data={companies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardCompanies}>
            <Text style={styles.textCompanies}>{item.nome}</Text>
            <Text style={styles.textCnpj}>{item.cnpj}</Text>
            <Text style={styles.textValorSolicitado}>
              {item.valor_solicitado}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
