const ghost = [
  {
    name: "SPIRIT",
    strength: "Um fantasma básico sem força real.",
    weakness:
      "Um Espírito pode ser parado temporariamente queimando incenso perto deles.",
    evidence: ["EMF 5", "Spirit Box", "Ghost Writing"],
    noEvidence: "A prevenção da caça a pos o uso de incenso dura 180s",
    hunt: "50%",
    unique:
      "Quando um espírito é manchado (no caso passam incenso perto), ele evita que o espírito cace novamente por 180 segundos, em vez dos 90 segundos normais para a maioria dos outros fantasmas. (60 segundos para demônio)",
    fact: "N/A",
    video: "N/A",
  },
  {
    name: "WRAITH",
    strength:
      "Wraiths quase nunca tocam o chão, o que significa que não podem ser rastreados pelas pegadas de UV.",
    weakness: "Wraiths não pisam em sal.",
    evidence: ["EMF 5", "Spirit Box", "DOTS"],
    noEvidence:
      "Não perturba montes de sal. Teletransporta-se para perto do jogador fora de um evento e dá EMF.",
    hunt: "50%",
    unique:
      "Wraith nunca pisará em sal, portanto, não será capaz de deixar pegadas verdes de UV. Wraith pode se teletransportar silenciosamente para um jogador fora de um evento de fantasma. Ao fazer isso, deixará uma leitura de EMF na localização do jogador e voltará para sua sala. Após o teletransporte, Wraith pode interagir com objetos, realizar eventos de fantasma ou até mesmo caçar antes de voltar para sua sala. Wraith pode ser encontrado bastante distante de sua sala favorita.",
    fact: "Wraiths não podem atravessar paredes ou se teletransportar durante uma caçada. ",
    video: "https://youtu.be/6XB_JZqqUok",
  },
  {
    name: "PHANTOM",
    strength:
      "Olhar para um Phantom fará com que sua sanidade caia consideravelmente mais rápido.",
    weakness:
      "Tirar uma foto do Phantom fará com que ele desapareça temporariamente.",
    evidence: ["Spirit Box", "Fingerprints", "DOTS"],
    noEvidence:
      "Desaparece quando uma foto do evento fantasma é tirada. Irá caminhar até o jogador e dar EMF. Menos visível durante a caçada.",
    hunt: "50%",
    unique:
      "O Phantom desaparecerá imediatamente após tirar uma foto dele durante um evento fantasma, e muitas vezes continuará fazendo barulho enquanto invisível. O fantasma não aparecerá na foto real. Durante a caçada, ele será mais invisível enquanto estiver piscando do que outros fantasmas. Phantoms gostam de seguir os jogadores. Para ajudar a manter o Phantom perto de sua sala, faça com que todos os membros do grupo fiquem juntos. Isso facilitará a obtenção de evidências e objetivos.",
    fact: "N/A",
    video: "https://youtu.be/rmGBwoSz5F8",
  },
  {
    name: "POLTERGEIST",
    strength:
      "Poltergeists podem lançar vários objetos de uma vez, e com grande força.",
    weakness: "Sem objetos para lançar, o Poltergeist fica impotente.",
    evidence: ["Spirit Box", "Fingerprints", "Ghost Writing"],
    noEvidence:
      "Lança vários objetos de uma vez. Lança muitos objetos durante as caçadas.",
    hunt: "50%",
    unique:
      "O Poltergeist tem a chance de lançar vários objetos de uma vez, diminuindo significativamente a sanidade do jogador em 2% por objeto lançado. O Poltergeist também lança objetos com mais frequência do que outros fantasmas, tanto durante a atividade normal quanto durante as caçadas. Ele tem 100% de chance de lançar um objeto próximo durante uma caçada a cada 0,5 segundos, em comparação com 50% para outros fantasmas. Na atualização Apocalypse, o Poltergeist recebeu a habilidade de lançar coisas com mais força, podendo agora lançar objetos com uma potência de 2-6, em comparação com 0-3 para todos os outros fantasmas. Para determinar se é um Poltergeist, faça pilhas de vários objetos e veja se ele os lança todos de uma vez.",
    fact: "N/A",
    video: "https://youtu.be/WAzT-H8mg0c",
  },
  {
    name: "BANSHEE",
    strength: "A Banshee enfraquecerá seu alvo antes de atacar.",
    weakness:
      "Às vezes, a Banshee pode ser ouvida gritando com o microfone parabólico.",
    evidence: ["Fingerprints", "Orbs", "DOTS"],
    noEvidence:
      "Grito único no microfone parabólico. Segue os movimentos do jogador alvo com sensores de movimento.",
    hunt: "50%",
    unique:
      "A Banshee só vai atacar um jogador durante toda a partida, desde que esse jogador esteja vivo e dentro da casa. Se o alvo estiver fora da casa, a Banshee vai caçar normalmente. Se o jogador morrer, a Banshee selecionará um novo alvo.\n\nCaracterísticas da Banshee: Ignora os jogadores que não são alvos durante a caçada. Possui um som único no microfone parabólico. Aumenta a chance de eventos fantasmais de canto. Ignora a sanidade média e pode caçar quando o alvo estiver abaixo ou em 50% de sanidade. Isso significa que, sob as circunstâncias certas, a Banshee pode caçar com uma sanidade em grupo de 87%, se seu alvo estiver em 50% e todos os outros membros estiverem em 100%. Costuma perseguir seu alvo enquanto vagueia. Exemplo de sons únicos no microfone parabólico abaixo.",
    fact: "Se o alvo estiver com sanidade acima de 50%, dentro ou fora da casa, a Banshee não pode caçar.",
    video: "https://youtu.be/4gC5lvFj2jc",
  },
  {
    name: "JINN",
    strength:
      "Jinn se moverá em uma velocidade mais rápida se sua vítima estiver longe.",
    weakness:
      "Desligar a fonte de energia do local impedirá que o Jinn use sua habilidade.",
    evidence: ["EMF 5", "Fingerprints", "Freezing Temps"],
    noEvidence:
      "Quando o disjuntor está ligado, Jinn é rápido quando o jogador está no campo de visão, mas fica mais lento quando está próximo. Drenar 25% da sanidade do jogador fornece leitura de EMF no disjuntor.",
    hunt: "50%",
    unique:
      "Ao direcionar um jogador durante uma caçada, o Jinn se move mais rápido quando a energia está ligada. Quando ele estiver a menos de 3 metros do jogador, o Jinn ficará mais lento. O Jinn também tem a capacidade de drenar instantaneamente 25% da sanidade quando estiver próximo ao jogador e o disjuntor estiver ligado. Ele fornecerá uma leitura de EMF no disjuntor ao usar sua habilidade de drenar sanidade. Desligar o disjuntor desabilitará ambas essas habilidades.",
    fact: "N/A",
    video: "https://youtu.be/xI_0hHM0IQI",
  },
  {
    name: "REVENANT",
    strength:
      "Revenant viajará em uma velocidade significativamente mais rápida ao caçar sua presa.",
    weakness:
      "Esconder-se do Revenant fará com que ele se mova muito lentamente.",
    evidence: ["Orbs", "Ghost Writing", "Freezing Temps"],
    noEvidence:
      "Velocidade de caça lenta quando a localização do jogador é desconhecida. Velocidade instantânea quando detecta o jogador.",
    hunt: "50%",
    unique:
      "O Revenant será muito lento quando a localização do jogador for desconhecida (1m/s). No entanto, quando a localização do jogador for conhecida, ele se moverá instantaneamente a 3m/s. Após alcançar a última localização conhecida, ele diminuirá gradualmente a velocidade se não encontrar o alvo. Passos distintos e lentos quando a localização do jogador é desconhecida. A melhor maneira de determinar se você tem um Revenant é durante a caça.",
    fact: "Anteriormente, o Revenant era o fantasma mais rápido e mais lento do jogo. No entanto, atualmente o Moroi é o mais rápido e o Deogen é o mais lento.",
    video: "https://youtu.be/E6EORpX0IRI",
  },
  {
    name: "MARE",
    strength: "Mare terá uma chance aumentada de atacar no escuro.",
    weakness:
      "Acender as luzes ao redor da Mare diminuirá sua chance de atacar.",
    evidence: ["Spirit Box", "Orbs", "Ghost Writing"],
    noEvidence:
      "Prefere eventos de luz explodindo. Não irá acender as luzes. Chance de desligar imediatamente a luz ao ligá-la.",
    hunt: "A Mare pode caçar com 60% de chance se as luzes estiverem apagadas, mas não até 40% se as luzes estiverem acesas perto da Mare.",
    unique:
      "Mare gosta de apagar as luzes. Ela não pode acender as luzes. A Mare tem uma chance maior de quebrar a luz. Ela fica mais ativa se as luzes estiverem acesas em seu quarto. A Mare tem uma chance de desligar imediatamente uma luz que foi ligada. Para verificar se há uma Mare no modo Pesadelo, preste atenção na troca de luzes. Atraia-a ligando as luzes e veja se ela as desligará instantaneamente.",
    fact: "N/A",
    video: "https://youtu.be/HZAltu7rh-A",
  },
  {
    name: "SHADE",
    strength: "Shades são muito mais difíceis de serem encontrados.",
    weakness:
      "O fantasma não iniciará uma caçada se houver jogadores por perto.",
    evidence: ["EMF 5", "Ghost Writing", "Freezing Temps"],
    noEvidence:
      "Prefere eventos de sombra. Menos ativo em geral. Não irá caçar se o jogador estiver no mesmo cômodo do fantasma.",
    hunt: "35%",
    unique:
      "O Shade tem uma atividade reduzida em geral. Ele aparecerá com mais frequência na forma de sombra durante eventos de fantasma. Menos propenso a mostrar o modelo completo do fantasma. A chance de evento de fantasma aumenta à medida que a sanidade média diminui. O Shade não jogará ou usará objetos se você estiver no mesmo cômodo do fantasma (com exceção do Ghost Writing). Um fantasma entediante? Provavelmente é um Shade.",
    fact: "N/A",
    video: "https://youtu.be/HZAltu7rh-A",
  },
  {
    name: "DEMON",
    strength:
      "Demons iniciarão caçadas com mais frequência do que outros fantasmas.",
    weakness:
      "Demons temem o crucifixo e serão menos agressivos quando próximos a ele.",
    evidence: ["Fingerprints", "Ghost Writing", "Freezing Temps"],
    noEvidence:
      "Caçador inicial. Tempo mínimo de intervalo entre caçadas de 20 segundos. A prevenção de caçada com incenso dura no mínimo 60 segundos.",
    hunt: "Demon pode caçar naturalmente com 70% de chance, com uma chance rara de caçar com qualquer sanidade.",
    unique:
      "O tempo mínimo de intervalo entre as caçadas do Demon é de 20 segundos, em comparação com o intervalo de 25 segundos para todos os outros fantasmas. Utilizar incenso em um Demon fora de uma caçada apenas impedirá que ele caçe por 60 segundos, em comparação com os habituais 90 segundos para outros fantasmas (180 para o Spirit). O crucifixo impedirá a caçada em um raio de 5 metros para os Demons, em vez de 3 metros para todos os outros fantasmas.",
    fact: "O Demon não tem mais uma taxa reduzida de dreno de sanidade ao usar objetos amaldiçoados.",
    video: "https://youtu.be/xXFZQ0Y0mlU",
  },
  {
    name: "YUREI",
    strength:
      "Yurei tem sido conhecido por ter um efeito mais forte na sanidade das pessoas.",
    weakness:
      "Utilizar incenso no local de morte de um Yurei o prenderá temporariamente, reduzindo o quanto ele vagueia.",
    evidence: ["Orbs", "Freezing Temps", "DOTS"],
    noEvidence:
      "Dreno de sanidade de 15% ao fechar a porta. Incenso prende o fantasma na sala.",
    hunt: "Yurei pode caçar com 50% de chance.",
    unique:
      "Yurei tem a habilidade de drenar 15% de sanidade quando próximo. Se usar essa habilidade, ele também fechará completamente uma porta em seu quarto como um sinal para verificar sua sanidade. Quando utilizado incenso, o Yurei ficará preso em seu quarto por um período de tempo.",
    fact: "Yurei não é o único fantasma que pode fechar a porta da mesma forma. Todos os fantasmas podem fazer isso, mas o Yurei faz com mais frequência, pois também está acompanhado de sua habilidade de dreno de sanidade. Exemplo abaixo:",
    video: "https://youtu.be/m_AR8aNyXOQ",
  },
  {
    name: "ONI",
    strength:
      "Oni é muito mais ativo quando os jogadores estão por perto e drenará a sanidade mais rapidamente ao se manifestar.",
    weakness:
      "Oni desaparece menos frequentemente durante a caçada às suas presas.",
    evidence: ["EMF 5", "Freezing Temps", "DOTS"],
    noEvidence:
      "Dreno duplo de sanidade ao ser tocado por um evento fantasma. Mais visível durante as caçadas.",
    hunt: "Oni pode caçar com 50% de chance.",
    unique:
      "Oni não pode fazer o evento fantasma de 'nevoeiro do fantasma' e tem uma chance maior de mostrar sua forma completa durante os eventos fantasma (não sombra ou stealth). Sempre preste atenção aos eventos fantasma que ocorrem.",
    fact: "Oni não arremessará objetos mais alto ou mais longe do que outros fantasmas. Essa habilidade foi transferida para o Poltergeist na atualização Apocalypse.",
    video: "https://youtu.be/5FicXO8G-Kw",
    video2:
      "https://clips.twitch.tv/DependableFlaccidKuduResidentSleeper-M5WMgUMKTAocvYp7",
  },
  {
    name: "YOKAI",
    strength:
      "Falar perto de um Yokai o irritará, aumentando a chance de um ataque.",
    weakness:
      "Durante a caçada, um Yokai só consegue ouvir vozes próximas a ele.",
    evidence: ["Spirit Box", "Orbs", "DOTS"],
    noEvidence:
      "Mais ativo quando há conversas próximas. Caçador precoce quando há conversas próximas.",
    hunt: "Yokai pode caçar normalmente com 50% de chance, com uma chance de caçar até 80% quando os jogadores próximos estão falando.",
    unique:
      "Durante uma caçada, o Yokai não consegue detectar sua voz ou perceber seu equipamento a mais de 2,5 metros de distância. Você pode se aproximar muito mais do Yokai com a caixa de música antes que ela pare de funcionar. A atividade do fantasma é aumentada quando se fala perto de um Yokai.",
    fact: "N/A",
    video: "N/A",
  },
  {
    name: "HANTU",
    strength:
      "Temperaturas mais baixas permitem que o Hantu se mova em velocidades mais rápidas.",
    weakness: "Hantu se move mais lentamente em áreas mais quentes.",
    evidence: ["Orbs", "Freezing Temps", "Fingerprints"],
    noEvidence:
      "Quanto menor a temperatura na sala, mais rápido será o Hantu." +
      "\n1,4 = 15°C+" +
      "\n1,75 = 12°C" +
      "\n2,1 = 9°C" +
      "\n2,3 = 6°C" +
      "\n2,5 = 3°C" +
      "\n2,7 = 0°C" +
      "\n(Velocidade em metros/segundo)" +
      "\nSem aumento de velocidade na linha de visão. Hantu não pode ligar o disjuntor e tem uma chance maior de desligar o disjuntor. Hantu produzirá respiração congelante em qualquer sala durante uma caçada se o disjuntor estiver desligado. (veja o vídeo abaixo) Hantu sempre terá temperaturas de congelamento no modo Pesadelo.",
    hunt: "Hantu pode caçar normalmente com 50% de chance.",
    unique:
      "Mais frio mais rapido.",
    fact: "N/A",
    video: "https://youtu.be/kQfPT_gTfxw",
  },
  {
    name: "GORYO",
    strength:
      "Goryo geralmente só se mostra nas câmeras se não houver pessoas por perto.",
    weakness: "Raramente são vistos longe do local onde morreram.",
    evidence: ["EMF 5", "Fingerprints", "DOTS"],
    noEvidence:
      "Não se afasta tanto de seu quarto. Não pode mudar de quarto favorito.",
    hunt: "Caça em 50% das vezes.",
    unique:
      "A evidência DOTS do Goryo só pode ser vista através da câmera de vídeo. DOTS não aparecerão se um jogador estiver na mesma sala. DOTS sempre será uma das duas evidências fornecidas para o Goryo no modo Nightmare. Goryo não sairá de seu quarto com tanta frequência quanto outros fantasmas e não pode mais mudar de quarto favorito. Se você vir DOTS sem o uso de uma câmera de vídeo, pode descartar a possibilidade de ser Goryo.",
    fact: "N/A",
    video: "https://youtu.be/-96by_5W04A",
  },
  {
    name: "MYLING",
    strength: "Myling é conhecido por ser mais silencioso durante a caçada.",
    weakness:
      "Mylings fazem sons paranormais com mais frequência (através do microfone parabólico).",
    evidence: ["EMF 5", "Fingerprints", "Ghost Writing"],
    noEvidence:
      "Não é possível ouvir o fantasma a mais de 12 metros durante a caçada. Respostas mais frequentes no microfone parabólico.",
    hunt: "Caça em 50% das vezes.",
    unique:
      "Myling pode se aproximar de você durante a caçada! Ela só pode ser ouvida durante a caçada a uma distância de 12 metros ou menos. Isso inclui tanto os passos quanto os sons vocais da caçada. Todos os outros fantasmas podem ser ouvidos a uma distância de até 20 metros. Myling pode responder com mais frequência através do microfone parabólico.",
    fact: "N/A",
    video: "https://youtu.be/ezRvYiA8vY0",
  },
  {
    name: "ONRYO",
    strength: "Onryo pode causar um ataque ao apagar chamas.",
    weakness: "Quando ameaçado, Onryo terá menos probabilidade de caçar.",
    evidence: ["Spirit Box", "Orbs", "Freezing Temps"],
    noEvidence:
      "Chamas acesas nas proximidades impedem a caçada. É possível forçar a caçada fazendo com que o fantasma apague 3 chamas, desde que não haja outras chamas por perto.",
    hunt: "Caça normalmente com 60% de chance, com uma chance de 100% ao apagar chamas.",
    unique:
      "Onryo não pode caçar dentro de 4 metros de uma chama. No entanto, se apagar 3 chamas e não houver outras chamas em um raio de 4 metros para evitar que ele caçe, ele iniciará uma caçada independentemente da sanidade. A chance de apagar velas aumenta quando um jogador morre.",
    fact: "N/A",
    video: "https://youtu.be/e-Rr88PId",
  },
  {
    name: "TWINS",
    strength: "Ambos os gêmeos podem se irritar e iniciar um ataque à presa.",
    weakness:
      "Os Twins frequentemente interagem com o ambiente ao mesmo tempo.",
    evidence: ["EMF 5", "Spirit Box", "Freezing Temps"],
    noEvidence:
      "Velocidades variáveis entre caçadas. Interações em várias áreas ao mesmo tempo.",
    hunt: "50%",
    unique:
      "O fantasma gêmeo pode interagir com vários objetos em quartos diferentes ao mesmo tempo. Ele pode caçar tanto na localização de ataque corpo a corpo quanto na localização de ataque à distância. Quando caça na localização de ataque à distância, a velocidade de caça é ligeiramente mais rápida (110%), e na localização de ataque corpo a corpo, a velocidade de caça é ligeiramente mais lenta (90%) em relação à velocidade normal do fantasma. Os Twins são apenas um fantasma no mapa. Eles só podem ativar sensores de movimento e sal, etc., em sua localização física (corpo a corpo).",
    fact: "N/A",
    video: "N/A",
  },

  {
    name: "RAIJU",
    strength:
      "Um Raiju pode drenar energia de dispositivos elétricos próximos, tornando-se mais rápido.",
    weakness:
      "Raiju está constantemente causando interferência em equipamentos eletrônicos durante os ataques, tornando-se mais fácil de rastrear.",
    evidence: ["EMF 5", "Orbs", "DOTS"],
    noEvidence:
      "Caçada precoce e velocidade rápida de caçada em torno de eletrônicos ativos.",
    hunt: "50% normalmente. 65% quando próximo a eletrônicos ativos.",
    unique:
      "Raiju será muito rápido ao redor de equipamentos elétricos ativados pelo jogador. Para se beneficiar do aumento de velocidade, Raiju precisa estar a uma distância de 6m de qualquer equipamento elétrico ativado em mapas pequenos, 8m em mapas médios e 10m em mapas grandes. As câmeras de cabeça são os únicos equipamentos ativados que não afetam a velocidade de Raiju. Durante a caçada, os eletrônicos irão falhar a 15m para Raiju, em oposição a 10m para todos os outros fantasmas. Para desacelerar Raiju, desligue todos os eletrônicos que você trouxe para a casa.",
    fact: "N/A",
    video: "N/A",
  },
  {
    name: "OBAKE",
    strength:
      "Quando interage com o ambiente, o Obake raramente deixa rastros.",
    weakness:
      "Às vezes, esse fantasma muda de forma, deixando evidências únicas.",
    evidence: ["EMF 5", "Fingerprints", "Orbs"],
    noEvidence: "Irá brevemente mudar o modelo do fantasma durante a caçada.",
    hunt: "50%",
    unique:
      "Obake é o único fantasma capaz de produzir Impressão Digital com 6 dedos, além de todas as outras impressões normais. Embora as Impressão Digital sejam sempre uma das duas evidências no modo Pesadelo, ainda existe uma chance de 25% de não deixar uma quando tocar em algo. Obake pode reduzir pela metade a duração de todas as Fingerprints restantes se usar sua habilidade. Se suspeitar de Obake, preste muita atenção às Fingerprints.",
    fact: "6 Impressão Digital com 6 dedos no canto inferior direito da imagem. Obake aprendeu a mudar de forma. Ele pode exibir rapidamente um modelo de fantasma diferente durante a caçada. Olhe atentamente! [Vídeo](https://youtu.be/ewEdfo719tU)",
    video: "https://youtu.be/ewEdfo719tU",
  },
  {
    name: "MIMIC",
    strength: "Não temos certeza do que esse fantasma é capaz. Tenha cuidado.",
    weakness:
      "Vários relatos observaram avistamentos de orbs fantasmagóricos perto de Mimics.",
    evidence: ["Spirit Box", "Fingerprints", "Freezing Temps"],
    noEvidence:
      "Mostrará orbs quando não houver evidências. Imita as habilidades de qualquer fantasma. Velocidades variáveis entre caçadas.",
    hunt: "O Mimic pode caçar seguindo as regras do fantasma que está imitando no momento.",
    unique:
      "O Mimic copiará o comportamento de qualquer tipo de fantasma tanto durante a caçada quanto fora dela. No modo Pesadelo, o Mimic mostrará 2 de suas 3 evidências, além de orbs. Em todos os outros modos, o Mimic mostrará todas as 3 evidências, além de orbs. As evidências são a maneira mais fácil de determinar se você está lidando com um Mimic, no entanto, você pode notar algumas características mais óbvias dos fantasmas que ele imita. Ele mudará de fantasma imitado a cada 30 segundos a 2 minutos e pode mudar várias vezes durante uma partida. O Mimic não pode mudar de comportamento durante a caçada.",
    fact: "N/A",
    video: "N/A",
  },
  {
    name: "MOROI",
    strength: "Quanto mais fraca for a vítima, mais forte o Moroi se torna.",
    weakness:
      "Moroi sofrem de hiperosmia, o que os enfraquece por períodos mais longos.",
    evidence: ["Spirit Box", "Ghost Writing", "Freezing Temps"],
    noEvidence:
      "Mais rápido quando a sanidade está baixa (começando abaixo de 45 de sanidade). Dreno duplo de sanidade após obter resposta no parabolic.",
    hunt: "50%",
    unique:
      "Moroi amaldiçoa um jogador que obtém resposta na Spirit Box ou no parabolic, com o dobro do dreno passivo de sanidade. Luzes e velas não impedem o dreno de sanidade amaldiçoado. Quando fora da casa, a maldição é pausada. Tomar pílulas de sanidade remove a maldição. Defumar durante a caçada cega o Moroi por 12 segundos. Moroi é mais rápido quanto mais baixa for a sanidade, variando de 1,5 m/s em sua velocidade mais lenta até 2,25 m/s em sua velocidade mais rápida. Teste... se você receber uma resposta na Spirit Box, pegue uma vela e entre na casa. Se a sanidade continuar diminuindo, é um Moroi. Sempre possui Spirit Box no Modo Pesadelo.",
    fact: "N/A",
    video: "N/A",
  },
  {
    name: "DEOGEN",
    strength:
      "Deogen sente constantemente os vivos. Você pode correr, mas não pode se esconder.",
    weakness:
      "Deogen requer muita energia para se manifestar e se move muito lentamente ao se aproximar de sua vítima.",
    evidence: ["Spirit Box", "Ghost Writing", "DOTS"],
    noEvidence:
      "Não é possível se esconder de Deo. Rápido quando distante. Super lento quando próximo ao jogador. Visível por mais tempo durante as caçadas.",
    hunt: "40%",
    unique:
      "Você pode correr, mas não pode se esconder! Deogen sabe onde você está o tempo todo. Causa caçadas com 40% de sanidade. Super rápido quando está longe, mas super lento quando está próximo do alvo. Pode trocar de alvo durante a caçada. Não há aceleração de linha de visão. Será visível por mais tempo durante as caçadas. Possui um som único na Spirit Box. Redução do alcance da Spirit Box para o som único. Sempre possui Spirit Box no Modo Pesadelo. Aumento da chance de DOTS/escrita. Exemplo do som único da Spirit Box abaixo.",
    fact: "N/A",
    video: "https://youtu.be/Zm2w4X-TU2c",
  },
  {
    name: "THAYE",
    strength: "Ao entrar no local, Thaye se tornará ativo, defensivo e ágil.",
    weakness:
      "Thaye enfraquecerá ao longo do tempo, tornando-se mais fraco, mais lento e menos agressivo.",
    evidence: ["Orbs", "Ghost Writing", "DOTS"],
    noEvidence:
      "Possível caçador inicial. Rápido quando não envelhecido. Lento quando envelhecido. Ouija board indicará um Thaye envelhecido.",
    hunt: "75% (diminui para 15% após o envelhecimento)",
    unique: `Thaye envelhece à medida que o tempo passa se houver um jogador por perto. Começando muito ativo e envelhecendo para um fantasma muito lento e inativo. Limiar de caça, atividade, velocidade e chance de evento do fantasma diminuirão à medida que você estiver perto do fantasma por mais tempo. O limiar de caça inicial é de 75%, diminuindo até um mínimo de 15%. Thaye diminui sua velocidade quando envelhece. Começando em 2,7m/s e diminuindo até um mínimo de 1m/s. Cada idade diminui a velocidade em 0,175m/s. Não há aceleração de linha de visão. Aumento da chance de DOTS/escrita. Quando perguntado "Quantos anos você tem" no ouija board, o Thaye responderá de forma diferente dependendo de sua idade.`,
    fact: "N/A",
    video: "N/A",
  },
];

const evidencesParser = {
  orb: "Orbs",
  escrita: "Ghost Writing",
  dots: "DOTS",
  box: "Spirit Box",
  temperatura: "Freezing Temps",
  impressao: "Fingerprints",
  emf: "EMF 5",
};

module.exports = { ghost, evidencesParser };
