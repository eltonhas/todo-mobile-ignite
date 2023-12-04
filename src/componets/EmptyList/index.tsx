import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './styles'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Feather name="calendar" size={56} color="#333333" />
      <View>
        <Text style={styles.textColorAndWheight}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textColor}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
