import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
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
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getCompanies = async () => {
    try {
      const { data } = await client.get("/companies");
      const filteredCompanies = data.filter(filterCompanies);
      setCompanies(filteredCompanies);
    } catch (error) {
      console.log(error);
    }
  };

  const filterCompanies = (company: Company) => {
    const name = company.nome.toLowerCase();
    const cnpj = company.cnpj.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return name.includes(searchTermLower) || cnpj.includes(searchTermLower);
  };

  useEffect(() => {
    getCompanies();
  }, []);

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
        <TextInput
          style={styles.input}
          onChangeText={setSearchTerm}
          value={searchTerm}
          placeholder="Pesquisar empresa ou CNPJ"
        />

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
            <View style={styles.buttonNextSection}>
              <Text style={styles.textValorSolicitado}>
                {item.valor_solicitado}
              </Text>
              <TouchableOpacity style={styles.buttonNext}>
                <Text style={styles.buttonText}>{">"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
