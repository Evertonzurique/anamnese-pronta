// Objeto que armazena os templates HTML de cada seção do formulário
const formSectionTemplates = {
    personal: `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title"><i class="fas fa-user"></i> Dados Pessoais</h2>
            </div>
            <div class="card-content">
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="name" class="form-label">Nome Completo *</label>
                            <input type="text" id="name" name="name" class="form-control" data-field="name" placeholder="Digite o nome completo">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-group">
                            <label for="birth" class="form-label">Nascimento *</label>
                            <input type="date" id="birth" name="birth" class="form-control" data-field="birth">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="form-group">
                            <label for="gender" class="form-label">Gênero *</label>
                            <select id="gender" name="gender" class="form-control" data-field="gender">
                                <option value="">Selecione...</option>
                                <option value="female">Feminino</option>
                                <option value="male">Masculino</option>
                                <option value="other">Outro</option>
                                <option value="not-specified">Prefiro não informar</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <div class="form-group">
                            <label for="email" class="form-label">E-mail *</label>
                            <input type="email" id="email" name="email" class="form-control" data-field="email" placeholder="exemplo@email.com">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label for="phone" class="form-label">Telefone *</label>
                            <input type="tel" id="phone" name="phone" class="form-control" data-field="phone" placeholder="(11) 99999-9999">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label for="occupation" class="form-label">Profissão</label>
                            <input type="text" id="occupation" name="occupation" class="form-control" data-field="occupation" placeholder="Digite sua profissão">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="address" class="form-label">Endereço Completo</label>
                            <textarea id="address" name="address" class="form-control" data-field="address" placeholder="Digite seu endereço completo (rua, número, bairro, cidade, CEP)"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    complaint: `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title"><i class="fas fa-file-lines"></i> Queixa Principal</h2>
            </div>
            <div class="card-content">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="main-complaint" class="form-label">Descrição da Queixa Principal *</label>
                            <textarea id="main-complaint" name="main-complaint" class="form-control" data-field="mainComplaint" placeholder="Descreva detalhadamente sua principal preocupação capilar"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="onset" class="form-label">Início dos Sintomas *</label>
                            <select id="onset" name="onset" class="form-control" data-field="onset">
                                <option value="">Selecione...</option>
                                <option value="recent">Recente (menos de 3 meses)</option>
                                <option value="moderate">Moderado (3-12 meses)</option>
                                <option value="long">Longo (mais de 1 ano)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label">Sintomas Associados (marque todos que se aplicam)</label>
                            <div class="row">
                                <div class="col-6">
                                    <div class="checkbox-group">
                                        <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="symptoms.hairLoss"> Queda de cabelo</label>
                                        <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="symptoms.thinning"> Afinamento dos fios</label>
                                        <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="symptoms.itching"> Coceira no couro cabeludo</label>
                                        <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="symptoms.dandruff"> Caspa</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="checkbox-group">
                                        <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="symptoms.oiliness"> Oleosidade excessiva</label>
                                        <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="symptoms.dryness"> Ressecamento</label>
                                        <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="symptoms.breakage"> Quebra dos fios</label>
                                        <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="symptoms.sensitivity"> Sensibilidade do couro cabeludo</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    clinical: `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title"><i class="fas fa-stethoscope"></i> Dados Clínicos</h2>
            </div>
            <div class="card-content">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label">Condições Médicas Existentes</label>
                            <div class="row">
                                <div class="col-6"><div class="checkbox-group">
                                    <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="conditions.diabetes"> Diabetes</label>
                                    <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="conditions.hypertension"> Hipertensão</label>
                                    <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="conditions.thyroid"> Problemas de Tireoide</label>
                                </div></div>
                                <div class="col-6"><div class="checkbox-group">
                                    <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="conditions.autoimmune"> Doenças Autoimunes</label>
                                    <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="conditions.hormonal"> Desequilíbrios Hormonais</label>
                                    <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="conditions.none"> Nenhuma das anteriores</label>
                                </div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="medications" class="form-label">Medicamentos em Uso</label>
                            <textarea id="medications" class="form-control" data-field="medications" placeholder="Liste todos os medicamentos que você usa"></textarea>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="allergies" class="form-label">Alergias Conhecidas</label>
                            <textarea id="allergies" class="form-control" data-field="allergies" placeholder="Liste alergias a medicamentos, produtos, etc."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    treatments: `
        <div class="card">
            <div class="card-header"><h2 class="card-title"><i class="fas fa-clock-rotate-left"></i> Tratamentos Anteriores</h2></div>
            <div class="card-content">
                <div class="row"><div class="col-12"><div class="form-group">
                    <label class="form-label">Tratamentos Capilares Anteriores</label>
                    <div class="row">
                        <div class="col-6"><div class="checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" class="form-check-input" data-field="previousTreatments.minoxidil"> Minoxidil
                                <i class="fas fa-info-circle info-icon minoxidil-info-icon"></i>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" class="form-check-input" data-field="previousTreatments.finasteride"> Finasterida
                                <i class="fas fa-info-circle info-icon finasteride-info-icon"></i>
                            </label>
                            <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="previousTreatments.laser"> Terapia a Laser</label>
                        </div></div>
                        <div class="col-6"><div class="checkbox-group">
                            <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="previousTreatments.supplements"> Suplementos Capilares</label>
                            <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="previousTreatments.transplant"> Transplante Capilar</label>
                            <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="previousTreatments.none"> Nenhum tratamento anterior</label>
                        </div></div>
                    </div>
                </div></div></div>
                <div class="row"><div class="col-12"><div class="form-group">
                    <label for="treatment-results" class="form-label">Resultados dos Tratamentos Anteriores</label>
                    <textarea id="treatment-results" class="form-control" data-field="treatmentResults" placeholder="Descreva os resultados obtidos, efeitos colaterais, etc."></textarea>
                </div></div></div>
            </div>
        </div>
    `,
    health: `
        <div class="card">
            <div class="card-header"><h2 class="card-title"><i class="fas fa-heart"></i> Histórico de Saúde Geral</h2></div>
            <div class="card-content">
                <div class="row">
                    <div class="col-6"><div class="form-group">
                        <label class="form-label">Histórico de Cirurgias</label>
                        <div class="radio-group">
                            <label class="radio-label"><input type="radio" name="surgeries" value="yes" class="form-check-input" data-field="surgeries"> Sim</label>
                            <label class="radio-label"><input type="radio" name="surgeries" value="no" class="form-check-input" data-field="surgeries"> Não</label>
                        </div>
                    </div></div>
                    <div class="col-6"><div class="form-group">
                        <label class="form-label">Histórico de Internações</label>
                        <div class="radio-group">
                            <label class="radio-label"><input type="radio" name="hospitalizations" value="yes" class="form-check-input" data-field="hospitalizations"> Sim</label>
                            <label class="radio-label"><input type="radio" name="hospitalizations" value="no" class="form-check-input" data-field="hospitalizations"> Não</label>
                        </div>
                    </div></div>
                </div>
                 <div class="row"><div class="col-12"><div class="form-group">
                    <label for="surgery-details" class="form-label">Detalhes (se aplicável)</label>
                    <textarea id="surgery-details" class="form-control" data-field="surgeryDetails" placeholder="Descreva cirurgias ou internações, datas e motivos"></textarea>
                </div></div></div>
            </div>
        </div>
    `,
    habits: `
        <div class="card">
            <div class="card-header"><h2 class="card-title"><i class="fas fa-mug-hot"></i> Hábitos de Vida</h2></div>
            <div class="card-content">
                <div class="row">
                    <div class="col-6"><div class="form-group">
                        <label for="alcohol" class="form-label">Consumo de Álcool</label>
                        <select id="alcohol" class="form-control" data-field="alcohol">
                            <option value="">Selecione...</option>
                            <option value="none">Não consome</option>
                            <option value="occasional">Ocasional</option>
                            <option value="moderate">Moderado</option>
                            <option value="frequente">Frequente</option>
                        </select>
                    </div></div>
                    <div class="col-6"><div class="form-group">
                        <label for="smoking" class="form-label">Tabagismo</label>
                        <select id="smoking" class="form-control" data-field="smoking">
                            <option value="">Selecione...</option>
                            <option value="non-smoker">Não fumante</option>
                            <option value="former-smoker">Ex-fumante</option>
                            <option value="regular">Fumante</option>
                        </select>
                    </div></div>
                </div>
                <div class="row">
                    <div class="col-6"><div class="form-group">
                        <label for="exercise" class="form-label">Prática de Exercícios</label>
                        <select id="exercise" class="form-control" data-field="exercise">
                            <option value="">Selecione...</option>
                            <option value="sedentary">Sedentário</option>
                            <option value="light">Leve</option>
                            <option value="moderate">Moderado</option>
                            <option value="intense">Intenso</option>
                        </select>
                    </div></div>
                    <div class="col-6"><div class="form-group">
                        <label for="stress" class="form-label">Nível de Estresse</label>
                        <select id="stress" class="form-control" data-field="stress">
                            <option value="">Selecione...</option>
                            <option value="low">Baixo</option>
                            <option value="moderate">Moderado</option>
                            <option value="high">Alto</option>
                        </select>
                    </div></div>
                </div>
            </div>
        </div>
    `,
    family: `
        <div class="card">
            <div class="card-header"><h2 class="card-title"><i class="fas fa-users"></i> Histórico Familiar</h2></div>
            <div class="card-content">
                <div class="row"><div class="col-12"><div class="form-group">
                    <label class="form-label">Histórico de Calvície na Família</label>
                     <div class="row">
                        <div class="col-4">
                            <div class="checkbox-group">
                                <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="familyBaldness.father"> Pai</label>
                                <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="familyBaldness.mother"> Mãe</label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="checkbox-group">
                                <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="familyBaldness.grandfatherPaternal"> Avô Paterno</label>
                                <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="familyBaldness.grandfatherMaternal"> Avô Materno</label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="checkbox-group">
                                <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="familyBaldness.siblings"> Irmãos/Irmãs</label>
                                <label class="checkbox-label"><input type="checkbox" class="form-check-input" data-field="familyBaldness.none"> Nenhum</label>
                            </div>
                        </div>
                    </div>
                </div></div></div>
            </div>
        </div>
    `,
    physical: `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">
                    <i class="fas fa-magnifying-glass"></i>
                    Exame Físico
                </h2>
            </div>
            
            <div class="card-content">
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="hair-loss-pattern" class="form-label">Padrão de Queda de Cabelo</label>
                            <select id="hair-loss-pattern" name="hair-loss-pattern" class="form-control" data-field="hairLossPattern">
                                <option value="">Selecione...</option>
                                <option value="diffuse">Difusa (espalhada por todo o couro cabeludo)</option>
                                <option value="male-pattern">Padrão Masculino (entradas e coroa)</option>
                                <option value="female-pattern">Padrão Feminino (afinamento no topo)</option>
                                <option value="circular">Circular (Alopecia Areata)</option>
                                <option value="traction">Por Tração (devido a penteados)</option>
                                <option value="none">Sem padrão específico</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label">Condição do Couro Cabeludo (marque todas que se aplicam)</label>
                            <div class="row">
                                <div class="col-6">
                                    <div class="checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="scalp-condition" value="normal" class="form-check-input" data-field="scalpCondition.normal"> Normal
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="scalp-condition" value="oily" class="form-check-input" data-field="scalpCondition.oily"> Oleoso
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="scalp-condition" value="dry" class="form-check-input" data-field="scalpCondition.dry"> Seco
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="scalp-condition" value="sensitive" class="form-check-input" data-field="scalpCondition.sensitive"> Sensível
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="scalp-condition" value="flaky" class="form-check-input" data-field="scalpCondition.flaky"> Descamativo
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="scalp-condition" value="irritated" class="form-check-input" data-field="scalpCondition.irritated"> Irritado/Inflamado
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label">Condição dos Fios de Cabelo (marque todas que se aplicam)</label>
                            <div class="row">
                                <div class="col-6">
                                    <div class="checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="hair-condition" value="normal" class="form-check-input" data-field="hairCondition.normal"> Normais
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="hair-condition" value="dry" class="form-check-input" data-field="hairCondition.dry"> Secos
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="hair-condition" value="oily" class="form-check-input" data-field="hairCondition.oily"> Oleosos
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="hair-condition" value="brittle" class="form-check-input" data-field="hairCondition.brittle"> Quebradiços
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="hair-condition" value="dull" class="form-check-input" data-field="hairCondition.dull"> Sem Brilho
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="hair-condition" value="thinning" class="form-check-input" data-field="hairCondition.thinning"> Afinando
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label">Teste Físico (marque todos que foram aplicados)</label>
                            <div class="row">
                                <div class="col-6">
                                    <div class="checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="teste-fisico" value="pull" class="form-check-input" data-field="teste-fisico.pull"> Pull teste - Tração
                                            <i class="fas fa-info-circle info-icon pull-test-info-icon"></i>
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="teste-fisico" value="card" class="form-check-input" data-field="teste-fisico.card"> Card test - Cartão/papel
                                            <i class="fas fa-info-circle info-icon card-test-info-icon"></i>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="checkbox-group">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="teste-fisico" value="tug" class="form-check-input" data-field="teste-fisico.tug"> Tug teste - Puxada
                                            <i class="fas fa-info-circle info-icon tug-test-info-icon"></i>
                                        </label>
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="teste-fisico" value="wash" class="form-check-input" data-field="teste-fisico.wash"> Wash teste - Lavagem
                                            <i class="fas fa-info-circle info-icon wash-test-info-icon"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="physical-observations" class="form-label">Observações Adicionais do Exame Físico</label>
                            <textarea id="physical-observations" name="physical-observations" class="form-control" 
                                      data-field="physicalObservations" 
                                      placeholder="Descreva outras observações relevantes sobre o couro cabeludo e fios de cabelo"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    trichoscopy: `
        <div class="card">
            <div class="card-header"><h2 class="card-title"><i class="fas fa-clipboard-list"></i> Tricoscopia e Avaliação Final</h2></div>
            <div class="card-content">
                <div class="row"><div class="col-12"><div class="form-group">
                    <label for="diagnosis" class="form-label">Diagnóstico Preliminar</label>
                    <textarea id="diagnosis" class="form-control" data-field="diagnosis" placeholder="Com base na anamnese e exame, descreva o diagnóstico preliminar"></textarea>
                </div></div></div>
                <div class="row"><div class="col-12"><div class="form-group">
                    <label for="recommendations" class="form-label">Recomendações de Tratamento</label>
                    <textarea id="recommendations" class="form-control" data-field="recommendations" placeholder="Descreva as recomendações de tratamento"></textarea>
                </div></div></div>
                <div class="row"><div class="col-12"><div class="form-group">
                    <label for="final-notes" class="form-label">Observações Finais</label>
                    <textarea id="final-notes" class="form-control" data-field="finalNotes" placeholder="Adicione orientações para retorno ou informações importantes"></textarea>
                </div></div></div>
            </div>
        </div>
    `,
    info: `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title"><i class="fas fa-info-circle"></i> Informações Gerais</h2>
            </div>
            <div class="card-content">
                <div class="info-section">
                    <h3>Anamnese</h3>
                    <p><strong>Objetivo:</strong> Coletar histórico do paciente, incluindo queixa principal, hábitos, tratamentos anteriores e histórico familiar.</p>
                    <p><strong>Dados relevantes:</strong></p>
                    <ul>
                        <li>Queda acentuada (suspeita de Eflúvio Telógeno).</li>
                        <li>Afinamento progressivo (suspeita de Alopecia Androgenética).</li>
                        <li>Sintomas inflamatórios (coceira, dor, descamação).</li>
                    </ul>
                    <p class="citation-text">
                        <small>Fonte: Harrison, S., & Sinclair, R. (2002). Telogen effluvium. Clinical and Experimental Dermatology, 27(5), 389-395.</small>
                    </p>
                </div>
                <div class="info-section">
                    <h3>2. Teste de Tração Leve (Pull Test)</h3>
                    <p><strong>Como fazer:</strong></p>
                    <ul>
                        <li>Paciente deve estar sem lavar o cabelo por 24h.</li>
                        <li>Tração leve de 50 fios em 4 áreas (temporal, occipital, vértex).</li>
                        <li><strong>Contar fios soltos:</strong></li>
                        <ul>
                            <li>Normal: 4-5 fios.</li>
                            <li>Eflúvio Telógeno (ET): 8-10 fios.</li>
                            <li>Alopecia Areata Incógnita: "mão cheia" de fios.</li>
                        </ul>
                    </ul>
                    <p><strong>Interpretação:</strong></p>
                    <ul>
                        <li>Bulbo branco: fio em fase telógena.</li>
                        <li>Bulbo preto: fio em fase anágena (queda patológica).</li>
                    </ul>
                    <p class="citation-text">
                        <small>Fonte: Shapiro, J. (2007). Clinical practice: Hair loss in women. New England Journal of Medicine, 357(16), 1620-1630.</small>
                    </p>
                </div>
                <div class="info-section">
                    <h3>Card Test</h3>
                    <p><strong>Objetivo:</strong> Diferenciar fios novos (crescimento) de fios quebrados (dano na haste).</p>
                    <p><strong>Método:</strong> Usar papel branco (cabelos escuros) ou preto (cabelos claros) para visualizar os fios.</p>
                    <p class="citation-text">
                        <small>Fonte: Mirmirani, P. (2011). Ceramic flat irons: Improper use leading to acquired trichorrhexis nodosa. Journal of the American Academy of Dermatology, 64(4), 769-770.</small>
                    </p>
                </div>
                <div class="info-section">
                    <h3>Teste da Puxada (Tug Test)</h3>
                    <p><strong>Objetivo:</strong> Avaliar fragilidade da haste capilar.</p>
                    <p><strong>Como fazer:</strong></p>
                    <ul>
                        <li>Segurar uma mecha de 50 fios.</li>
                        <li>Deslizar os dedos da ponta até a raiz.</li>
                        <li>Fios quebradiços indicam danos químicos ou mecânicos.</li>
                    </ul>
                    <p class="citation-text">
                        <small>Fonte: Gavazzoni Dias, M. F. (2015). Hair cosmetics: An overview. International Journal of Trichology, 7(1), 2-15.</small>
                    </p>
                </div>
                <div class="info-section">
                    <h3>Teste da Lavagem (Wash Test)</h3>
                    <p><strong>Objetivo:</strong> Diferenciar Alopecia Androgenética (AAG) de Eflúvio Telógeno Crônico.</p>
                    <p><strong>Método:</strong></p>
                    <ul>
                        <li>Paciente fica 4 dias sem lavar o cabelo.</li>
                        <li>Lavar com shampoo (sem condicionador) e coletar fios em uma gaze.</li>
                        <li>Separar fios curtos (<3 cm = velus) e longos.</li>
                    </ul>
                    <p><strong>Interpretação:</strong></p>
                    <ul>
                        <li>10% fios velus = AAG.</li>
                        <li>100 fios totais + velus = AAG + ET.</li>
                    </ul>
                    <p class="citation-text">
                        <small>Fonte: Blume-Peytavi, U., et al. (2011). Hair growth assessment techniques. Journal of Investigative Dermatology Symposium Proceedings, 15(1), 23-27.</small>
                    </p>
                </div>
                <div class="info-section">
                    <h3>Minoxidil Tópico</h3>
                    <p><strong>Ficha Técnica Clínico-Tricológica</strong></p>
                    <p><strong>Classe farmacológica:</strong> Vasodilatador periférico</p>
                    <p><strong>Formulações comuns:</strong> 2%, 5%, soluções hidroalcoólicas ou espuma</p>
                    <p><strong>Indicação principal:</strong></p>
                    <ul>
                        <li>Alopecia androgenética masculina e feminina</li>
                    </ul>
                    <p><strong>Indicações adicionais (off-label):</strong></p>
                    <ul>
                        <li>Eflúvio telógeno crônico</li>
                        <li>Alopecia areata (em associação a outras terapias)</li>
                        <li>Apoio em alopecias cicatriciais estabilizadas</li>
                    </ul>
                    <p><strong>Via de uso:</strong> Tópica, no couro cabeludo, geralmente 1 a 2 vezes ao dia</p>
                    <p><strong>Segurança:</strong> Efeitos adversos mais comuns — irritação, descamação, eritema, prurido, hipertricose em áreas adjacentes</p>
                    <p><strong>Mecanismos de ação:</strong></p>
                    <ul>
                        <li>Vasodilatação local → Aumenta fluxo sanguíneo e aporte de nutrientes ao folículo</li>
                        <li>Abertura de canais de potássio (K⁺-ATP) → Ativa fatores de crescimento folicular</li>
                        <li>Prolongamento da fase anágena → Mantém o fio em crescimento por mais tempo</li>
                        <li>Aumento de espessura e densidade → Reverte parcialmente a miniaturização folicular</li>
                        <li>Estimulação da papila dérmica → Favorece proliferação celular e inibe apoptose precoce</li>
                    </ul>
                    <p><strong>Efeitos Observados no Cabelo:</strong></p>
                    <ul>
                        <li>Melhora da densidade capilar</li>
                        <li>Espessamento do fio</li>
                        <li>Redução da queda visível após uso contínuo (3–6 meses)</li>
                        <li>Crescimento de fios novos mais finos inicialmente, que engrossam com o tempo</li>
                    </ul>
                    <p><strong>Considerações Importantes:</strong></p>
                    <ul>
                        <li>A suspensão do uso geralmente leva à perda dos resultados obtidos em 3–4 meses</li>
                        <li>A resposta ao tratamento é variável e depende do estágio da alopecia</li>
                        <li>Pode ser associado a outros tratamentos (finasterida oral/tópica, PRP, microagulhamento) para potencializar resultados</li>
                    </ul>
                    <p class="citation-text">
                        <small>Fontes: Olsen EA et al. A multicenter, randomized, placebo-controlled, double-blind clinical trial of topical minoxidil in the treatment of androgenetic alopecia in women. J Am Acad Dermatol. 2002;47(5):767-774. doi:10.1067/mjd.2002.122734; Messenger AG, Rundegren J. Minoxidil: mechanisms of action on hair growth. Br J Dermatol. 2004;150(2):186-94. doi:10.1111/j.1365-2133.2004.05785.x</small>
                    </p>
                </div>
                <div class="info-section">
                    <h3>Finasterida</h3>
                    <p><strong>Ficha Técnica Clínico-Tricológica (Tópica e Injetável)</strong></p>
                    <p><strong>Identificação</strong></p>
                    <ul>
                        <li><strong>Classe farmacológica:</strong> Inibidor seletivo da 5α-redutase tipo II</li>
                        <li><strong>Indicação principal em tricologia:</strong> Alopecia androgenética masculina e feminina (off-label no caso feminino)</li>
                        <li><strong>Mecanismo geral:</strong> Reduz a conversão da testosterona em dihidrotestosterona (DHT), hormônio envolvido na miniaturização folicular</li>
                    </ul>
                    <h3>1. Finasterida Tópica</h3>
                    <ul>
                        <li><strong>Apresentação:</strong> Loções, soluções hidroalcoólicas ou oleosas, isolada ou associada a minoxidil</li>
                        <li><strong>Concentrações comuns:</strong> 0,025% a 0,1%</li>
                        <li><strong>Posologia usual:</strong> Aplicar 1x/dia no couro cabeludo (dose média absorvida: 0,2–0,6 mg/dia)</li>
                        <li><strong>Mecanismo de ação:</strong> Mesma ação do oral, mas com absorção sistêmica significativamente menor, focando na região aplicada</li>
                    </ul>
                    <p><strong>Indicação clínica:</strong></p>
                    <ul>
                        <li>Alopecia androgenética</li>
                        <li>Alternativa para pacientes com risco ou receio de efeitos sistêmicos</li>
                    </ul>
                    <p><strong>Efeitos adversos possíveis:</strong> Irritação local, eritema, descamação; raramente efeitos hormonais leves</p>
                    <h3>2. Finasterida Injetável (uso experimental/off-label)</h3>
                    <ul>
                        <li><strong>Apresentação:</strong> Solução estéril manipulada para microinjeções intradérmicas no couro cabeludo</li>
                        <li><strong>Concentrações comuns em estudos:</strong> 0,025% a 0,1% (ajustada por protocolo)</li>
                        <li><strong>Posologia usual experimental:</strong> Aplicações mensais ou bimestrais, conforme protocolo clínico</li>
                        <li><strong>Mecanismo de ação:</strong> Administração direta na derme, atingindo folículos pilosos com absorção sistêmica mínima</li>
                    </ul>
                    <p><strong>Indicação clínica:</strong></p>
                    <ul>
                        <li>Pesquisada para alopecia androgenética masculina e feminina</li>
                        <li>Opção para pacientes que não toleram uso oral</li>
                    </ul>
                    <p><strong>Efeitos adversos possíveis:</strong> Dor local, inflamação, edema, reação de hipersensibilidade; raros efeitos hormonais</p>
                    <p class="citation-text">
                        <small>Fontes: Rossi A et al. Comparative effectiveness of topical finasteride in male androgenetic alopecia: a randomized clinical trial. Dermatol Ther. 2020;33(6):e14120. doi:10.1111/dth.14120; Suchonwanit P et al. Finasteride and its potential for the treatment of female pattern hair loss: Evidence to date. Drug Des Devel Ther. 2019;13:951-960. doi:10.2147/DDDT.S195199</small>
                    </p>
                </div>
            </div>
        </div>
    `
};


// LÓGICA PRINCIPAL DA APLICAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { id: "personal", title: "Dados Pessoais", icon: "fa-user" },
        { id: "complaint", title: "Queixa Principal", icon: "fa-file-lines" },
        { id: "clinical", title: "Dados Clínicos", icon: "fa-stethoscope" },
        { id: "treatments", title: "Tratamentos Anteriores", icon: "fa-clock-rotate-left" },
        { id: "health", title: "Histórico de Saúde", icon: "fa-heart" },
        { id: "habits", title: "Hábitos", icon: "fa-mug-hot" },
        { id: "family", title: "Histórico Familiar", icon: "fa-users" },
        { id: "physical", title: "Exame Físico", icon: "fa-magnifying-glass" },
        { id: "trichoscopy", title: "Tricoscopia", icon: "fa-clipboard-list" },
        { id: "info", title: "Informações", icon: "fa-info-circle" },
    ];

    let activeSection = "personal";
    let formData = {};
    const totalFields = 60; // Ajuste este número para o total real de campos

    const sectionsList = document.getElementById('sections-list');
    const formSectionsContainer = document.getElementById('form-sections');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    // Pop-ups
    const infoPopup = document.getElementById('info-popup');
    const closeInfoPopupBtn = document.querySelector('.close-info-popup');
    const pullTestPopup = document.getElementById('pull-test-popup');
    const closePullTestPopupBtn = document.querySelector('.close-pull-test-popup');
    const cardTestPopup = document.getElementById('card-test-popup');
    const closeCardTestPopupBtn = document.querySelector('.close-card-test-popup');
    const tugTestPopup = document.getElementById('tug-test-popup');
    const closeTugTestPopupBtn = document.querySelector('.close-tug-test-popup');
    const washTestPopup = document.getElementById('wash-test-popup');
    const closeWashTestPopupBtn = document.querySelector('.close-wash-test-popup');
    const minoxidilPopup = document.getElementById('minoxidil-popup');
    const closeMinoxidilPopupBtn = document.querySelector('.close-minoxidil-popup');
    // NOVO POPUP DE FINASTERIDA
    const finasteridePopup = document.getElementById('finasteride-popup');
    const closeFinasteridePopupBtn = document.querySelector('.close-finasteride-popup');

    function initializeSections() {
        sectionsList.innerHTML = ''; // Limpa a lista
        sections.forEach(section => {
            const li = document.createElement('li');
            li.innerHTML = `
                <button id="nav-${section.id}" class="nav-item">
                    <i class="fas ${section.icon}"></i>
                    <span>${section.title}</span>
                </button>
            `;
            sectionsList.appendChild(li);
        });
    }

    function initializeFormSections() {
        formSectionsContainer.innerHTML = ''; // Limpa o container
        sections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'form-section';
            sectionDiv.dataset.id = section.id;
            // Usa o objeto de templates para buscar o HTML
            sectionDiv.innerHTML = formSectionTemplates[section.id] || '<p>Seção não encontrada.</p>';
            formSectionsContainer.appendChild(sectionDiv);
        });
    }

    function setupEventListeners() {
        sectionsList.addEventListener('click', function(e) {
            const navButton = e.target.closest('.nav-item');
            if (navButton) {
                const sectionId = navButton.id.replace('nav-', '');
                setActiveSection(sectionId);
            }
        });

        formSectionsContainer.addEventListener('input', function(e) {
            if (e.target.matches('[data-field]')) {
                updateFormData(e.target);
            }
        });

        nextBtn.addEventListener('click', function() {
            const currentIndex = sections.findIndex(s => s.id === activeSection);
            if (currentIndex < sections.length - 1) {
                setActiveSection(sections[currentIndex + 1].id);
            }
        });

        prevBtn.addEventListener('click', function() {
            const currentIndex = sections.findIndex(s => s.id === activeSection);
            if (currentIndex > 0) {
                setActiveSection(sections[currentIndex - 1].id);
            }
        });

        document.getElementById('hair-anamnesis-form').addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulário Salvo:', formData);
            alert('Ficha de anamnese salva com sucesso!');
        });

        // Event Listeners para os pop-ups
        document.querySelector('.Anamnese .info-icon').addEventListener('click', function() {
            infoPopup.style.display = 'flex';
        });
        closeInfoPopupBtn.addEventListener('click', function() {
            infoPopup.style.display = 'none';
        });

        formSectionsContainer.addEventListener('click', function(e) {
            if (e.target.matches('.pull-test-info-icon')) {
                pullTestPopup.style.display = 'flex';
            }
            if (e.target.matches('.card-test-info-icon')) {
                cardTestPopup.style.display = 'flex';
            }
            if (e.target.matches('.tug-test-info-icon')) {
                tugTestPopup.style.display = 'flex';
            }
            if (e.target.matches('.wash-test-info-icon')) {
                washTestPopup.style.display = 'flex';
            }
            if (e.target.matches('.minoxidil-info-icon')) {
                minoxidilPopup.style.display = 'flex';
            }
            if (e.target.matches('.finasteride-info-icon')) {
                finasteridePopup.style.display = 'flex';
            }
        });

        closePullTestPopupBtn.addEventListener('click', function() {
            pullTestPopup.style.display = 'none';
        });
        closeCardTestPopupBtn.addEventListener('click', function() {
            cardTestPopup.style.display = 'none';
        });
        closeTugTestPopupBtn.addEventListener('click', function() {
            tugTestPopup.style.display = 'none';
        });
        closeWashTestPopupBtn.addEventListener('click', function() {
            washTestPopup.style.display = 'none';
        });
        closeMinoxidilPopupBtn.addEventListener('click', function() {
            minoxidilPopup.style.display = 'none';
        });
        // NOVO FECHAMENTO DO POPUP
        closeFinasteridePopupBtn.addEventListener('click', function() {
            finasteridePopup.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target === infoPopup) {
                infoPopup.style.display = 'none';
            }
            if (event.target === pullTestPopup) {
                pullTestPopup.style.display = 'none';
            }
            if (event.target === cardTestPopup) {
                cardTestPopup.style.display = 'none';
            }
            if (event.target === tugTestPopup) {
                tugTestPopup.style.display = 'none';
            }
            if (event.target === washTestPopup) {
                washTestPopup.style.display = 'none';
            }
            if (event.target === minoxidilPopup) {
                minoxidilPopup.style.display = 'none';
            }
            // NOVO FECHAMENTO DO POPUP
            if (event.target === finasteridePopup) {
                finasteridePopup.style.display = 'none';
            }
        });
    }

    function updateFormData(input) {
        const field = input.dataset.field;
        let value = input.value;

        if (input.type === 'checkbox') {
            const [group, item] = field.split('.');
            formData[group] = formData[group] || {};
            formData[group][item] = input.checked;
        } else if (input.type === 'radio') {
            if (input.checked) {
                formData[field] = value;
            }
        } else {
            formData[field] = value;
        }

        updateProgress();
    }

    function setActiveSection(sectionId) {
        activeSection = sectionId;
        updateUI();
    }
    
    function updateProgress() {
        const filledFields = Object.values(formData).filter(value => {
            if (typeof value === 'object' && value !== null) {
                return Object.values(value).some(v => v === true);
            }
            return value !== '' && value !== null && value !== undefined;
        }).length;
        
        const progress = Math.min(100, Math.round((filledFields / totalFields) * 100));
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-percentage').textContent = `${progress}%`;
    }

    function updateUI() {
        const currentIndex = sections.findIndex(s => s.id === activeSection);

        // Atualiza navegação da sidebar
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        document.getElementById(`nav-${activeSection}`).classList.add('active');

        // Mostra a seção do formulário correta
        document.querySelectorAll('.form-section').forEach(section => section.classList.remove('active'));
        document.querySelector(`.form-section[data-id="${activeSection}"]`).classList.add('active');
        
        // Atualiza visibilidade dos botões
        prevBtn.style.display = (currentIndex === 0) ? 'none' : 'inline-block';
        nextBtn.style.display = (currentIndex === sections.length - 1) ? 'none' : 'inline-block';
        submitBtn.style.display = (currentIndex === sections.length - 1) ? 'inline-block' : 'none';
    }

    // Inicialização da Aplicação
    initializeSections();
    initializeFormSections();
    setupEventListeners();
    updateUI();
});