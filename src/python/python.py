import streamlit as st

#função para calcular os mantimentos necessários.
def calcular_necessidades(pessoas, dias=1):
    agua_total = 2 * pessoas * dias  # calcular o tanto de água necessário para os dias.
    comida_total = 3 * pessoas * dias  # calcular o tanto de refeições necessário para os dias.
    return agua_total, comida_total #retorna as quantidades necessárias respectivamente.

#função para exibir a lista
def mostrar_lista(pessoas, dias, lista_extra):
    if pessoas == 0 or dias == 0: #checando pra ver se já foi colocado o número de pessoas e dias
        st.warning("Por favor, defina o número de pessoas e dias primeiro.")
        return
    
    st.write(f"**Número de pessoas:** {pessoas}")
    st.write(f"**Dias planejados:** {dias}")
    agua, comida = calcular_necessidades(pessoas, dias)
    st.write(f"**Água necessária:** {agua} litros")
    st.write(f"**Refeições necessárias:** {comida} unidades")

    #exibir  a lista extra de equipamentos
    if lista_extra:
        st.write("### Itens extras adicionados:")
        for i, item in enumerate(lista_extra, 1):
            st.write(f"{i}. {item['item']} - Quantidade: {item['quantidade']}")
    else:
        st.write("Nenhum item extra adicionado.")

def main():
    st.title("Planejador de Kit de Emergência")
    
    #Dicionário especial do streamlit para guardar interações
    if 'pessoas' not in st.session_state: #verifica se a variavel já foi criada, se não cria com valor 0 como base.
        st.session_state.pessoas = 0
    if 'dias' not in st.session_state: #verifica se a variavel já foi criada, se não cria com valor 0 como base.
        st.session_state.dias = 0
    if 'lista_extra' not in st.session_state: #verifica se a lista já foi criada, se não cria com nada como base.
        st.session_state.lista_extra = []


    pessoas = st.number_input("Número de pessoas", min_value=0, step=1, value=st.session_state.pessoas) #input para receber o número de pessoas.
    dias = st.number_input("Número de dias", min_value=0, step=1, value=st.session_state.dias) #input para receber o número de dias.

    if st.button("Salvar número de pessoas e dias"): #botão para salvar os dados inseridos.
        if pessoas <= 0 or dias <= 0: #checagem para ver se os dados inseridos são validos.
            st.error("Por favor, insira números positivos para pessoas e dias.")
        else:
            st.session_state.pessoas = pessoas
            st.session_state.dias = dias
            st.success("Número de pessoas e dias salvos com sucesso!")

    st.write("---")

    if st.button("Mostrar lista atual"): #mostra a lista atual, com pessoas, dias, agua e comida necessárias, além dos equipamentos.
        mostrar_lista(st.session_state.pessoas, st.session_state.dias, st.session_state.lista_extra)

    st.write("---")

    st.write("### Adicionar equipamento extra (Ex:Lanterna)") #adiciona equipamentos extras.
    item = st.text_input("Nome do equipamento extra")
    quantidade = st.number_input("Quantidade", min_value=1, step=1, value=1)

    if st.button("Adicionar equipamento extra"): 
        if item.strip() == "":  #checa pra ver se tem um nome válido
            st.error("Informe um nome válido para o item.")
        else:
            st.session_state.lista_extra.append({"item": item, "quantidade": quantidade})
            st.success(f"Item '{item}' adicionado com quantidade {quantidade}.") #item adicionado com sucesso

if __name__ == "__main__": #verifica se o python está sendo executado corretamente.
    main()
