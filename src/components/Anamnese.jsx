import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/background_global.webp';
import logoImage from '../assets/Logo_Com_Texto_cabecalho.webp';
import sidebarImage from '../assets/sideBarLeft1.png';
import formBackgroundImage from '../assets/Fundo_Form_Container_Formulario.webp';

const Anamnese = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [showPullTestPopup, setShowPullTestPopup] = useState(false);
  const [showCardTestPopup, setShowCardTestPopup] = useState(false);
  const [showTugTestPopup, setShowTugTestPopup] = useState(false);
  const [showWashTestPopup, setShowWashTestPopup] = useState(false);
  const [showMinoxidilPopup, setShowMinoxidilPopup] = useState(false);
  const [showFinasteridePopup, setShowFinasteridePopup] = useState(false);
  const [anamnesisData, setAnamnesisData] = useState({});

  const sections = [
    { id: 'personal', title: 'Dados Pessoais', icon: 'fas fa-user' },
    { id: 'complaint', title: 'Queixa Principal', icon: 'fas fa-file-lines' },
    { id: 'clinical', title: 'Dados Clínicos', icon: 'fas fa-stethoscope' },
    { id: 'treatments', title: 'Tratamentos Anteriores', icon: 'fas fa-clock-rotate-left' },
    { id: 'health', title: 'Histórico de Saúde Geral', icon: 'fas fa-heart' },
    { id: 'habits', title: 'Hábitos de Vida', icon: 'fas fa-mug-hot' },
    { id: 'family', title: 'Histórico Familiar', icon: 'fas fa-users' },
    { id: 'tests', title: 'Testes Tricológicos', icon: 'fas fa-microscope' },
    { id: 'observations', title: 'Observações Finais', icon: 'fas fa-notes-medical' }
  ];

  const updateProgress = () => {
    const progress = ((currentSection + 1) / sections.length) * 100;
    return Math.round(progress);
  };

  const handleInputChange = (field, value) => {
    setAnamnesisData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (parentField, childField, value) => {
    setAnamnesisData(prev => ({
      ...prev,
      [parentField]: {
        ...prev[parentField],
        [childField]: value
      }
    }));
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const goToSection = (index) => {
    setCurrentSection(index);
  };

  const renderPersonalSection = () => (
    <div className="bg-white/10 border border-gray-300 rounded-lg p-6 mb-5">
      <div className="border-b border-gray-300 pb-4 mb-5">
        <h2 className="flex items-center gap-3 text-2xl font-['Poppins'] font-semibold">
          <i className="fas fa-user"></i> Dados Pessoais
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Nome Completo *</label>
          <input 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            placeholder="Digite o nome completo"
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Nascimento *</label>
          <input 
            type="date" 
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            onChange={(e) => handleInputChange('birth', e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Gênero *</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            onChange={(e) => handleInputChange('gender', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="female">Feminino</option>
            <option value="male">Masculino</option>
            <option value="other">Outro</option>
            <option value="not-specified">Prefiro não informar</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">E-mail *</label>
          <input 
            type="email" 
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            placeholder="exemplo@email.com"
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Telefone *</label>
          <input 
            type="tel" 
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            placeholder="(11) 99999-9999"
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Profissão</label>
          <input 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            placeholder="Digite sua profissão"
            onChange={(e) => handleInputChange('occupation', e.target.value)}
          />
        </div>
        <div className="lg:col-span-3">
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Endereço Completo</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-md text-black min-h-[100px]"
            placeholder="Digite seu endereço completo (rua, número, bairro, cidade, CEP)"
            onChange={(e) => handleInputChange('address', e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );

  const renderComplaintSection = () => (
    <div className="bg-white/10 border border-gray-300 rounded-lg p-6 mb-5">
      <div className="border-b border-gray-300 pb-4 mb-5">
        <h2 className="flex items-center gap-3 text-2xl font-['Poppins'] font-semibold">
          <i className="fas fa-file-lines"></i> Queixa Principal
        </h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Descrição da Queixa Principal *</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-md text-black min-h-[100px]"
            placeholder="Descreva detalhadamente sua principal preocupação capilar"
            onChange={(e) => handleInputChange('mainComplaint', e.target.value)}
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-[#F5F7FA]">Início dos Sintomas *</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              onChange={(e) => handleInputChange('onset', e.target.value)}
            >
              <option value="">Selecione...</option>
              <option value="recent">Recente (menos de 3 meses)</option>
              <option value="moderate">Moderado (3-12 meses)</option>
              <option value="long">Longo (mais de 1 ano)</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Sintomas Associados (marque todos que se aplicam)</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('symptoms', 'hairLoss', e.target.checked)} />
                Queda de cabelo
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('symptoms', 'thinning', e.target.checked)} />
                Afinamento dos fios
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('symptoms', 'itching', e.target.checked)} />
                Coceira no couro cabeludo
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('symptoms', 'dandruff', e.target.checked)} />
                Caspa
              </label>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('symptoms', 'oiliness', e.target.checked)} />
                Oleosidade excessiva
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('symptoms', 'dryness', e.target.checked)} />
                Ressecamento
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('symptoms', 'breakage', e.target.checked)} />
                Quebra dos fios
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('symptoms', 'sensitivity', e.target.checked)} />
                Sensibilidade do couro cabeludo
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderClinicalSection = () => (
    <div className="bg-white/10 border border-gray-300 rounded-lg p-6 mb-5">
      <div className="border-b border-gray-300 pb-4 mb-5">
        <h2 className="flex items-center gap-3 text-2xl font-['Poppins'] font-semibold">
          <i className="fas fa-stethoscope"></i> Dados Clínicos
        </h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Condições Médicas Existentes</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('conditions', 'diabetes', e.target.checked)} />
                Diabetes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('conditions', 'hypertension', e.target.checked)} />
                Hipertensão
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('conditions', 'thyroid', e.target.checked)} />
                Problemas de Tireoide
              </label>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('conditions', 'autoimmune', e.target.checked)} />
                Doenças Autoimunes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('conditions', 'hormonal', e.target.checked)} />
                Desequilíbrios Hormonais
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('conditions', 'none', e.target.checked)} />
                Nenhuma das anteriores
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-[#F5F7FA]">Medicamentos em Uso</label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-md text-black min-h-[100px]"
              placeholder="Liste todos os medicamentos que você usa"
              onChange={(e) => handleInputChange('medications', e.target.value)}
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-[#F5F7FA]">Alergias Conhecidas</label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-md text-black min-h-[100px]"
              placeholder="Liste alergias a medicamentos, produtos, etc."
              onChange={(e) => handleInputChange('allergies', e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTreatmentsSection = () => (
    <div className="bg-white/10 border border-gray-300 rounded-lg p-6 mb-5">
      <div className="border-b border-gray-300 pb-4 mb-5">
        <h2 className="flex items-center gap-3 text-2xl font-['Poppins'] font-semibold">
          <i className="fas fa-clock-rotate-left"></i> Tratamentos Anteriores
        </h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Tratamentos Capilares Anteriores</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('previousTreatments', 'minoxidil', e.target.checked)} />
                Minoxidil
                <i className="fas fa-info-circle text-[#6BD6B1] cursor-pointer ml-2" onClick={() => setShowMinoxidilPopup(true)}></i>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('previousTreatments', 'finasteride', e.target.checked)} />
                Finasterida
                <i className="fas fa-info-circle text-[#6BD6B1] cursor-pointer ml-2" onClick={() => setShowFinasteridePopup(true)}></i>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('previousTreatments', 'laser', e.target.checked)} />
                Terapia a Laser
              </label>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('previousTreatments', 'supplements', e.target.checked)} />
                Suplementos Capilares
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('previousTreatments', 'transplant', e.target.checked)} />
                Transplante Capilar
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('previousTreatments', 'none', e.target.checked)} />
                Nenhum tratamento anterior
              </label>
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Resultados dos Tratamentos Anteriores</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-md text-black min-h-[100px]"
            placeholder="Descreva os resultados obtidos, efeitos colaterais, etc."
            onChange={(e) => handleInputChange('treatmentResults', e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );

  const renderHealthSection = () => (
    <div className="bg-white/10 border border-gray-300 rounded-lg p-6 mb-5">
      <div className="border-b border-gray-300 pb-4 mb-5">
        <h2 className="flex items-center gap-3 text-2xl font-['Poppins'] font-semibold">
          <i className="fas fa-heart"></i> Histórico de Saúde Geral
        </h2>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-[#F5F7FA]">Histórico de Cirurgias</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="surgeries" value="yes" className="cursor-pointer" onChange={(e) => handleInputChange('surgeries', e.target.value)} />
                Sim
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="surgeries" value="no" className="cursor-pointer" onChange={(e) => handleInputChange('surgeries', e.target.value)} />
                Não
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-[#F5F7FA]">Histórico de Internações</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="hospitalizations" value="yes" className="cursor-pointer" onChange={(e) => handleInputChange('hospitalizations', e.target.value)} />
                Sim
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="hospitalizations" value="no" className="cursor-pointer" onChange={(e) => handleInputChange('hospitalizations', e.target.value)} />
                Não
              </label>
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Detalhes (se aplicável)</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-md text-black min-h-[100px]"
            placeholder="Descreva cirurgias ou internações, datas e motivos"
            onChange={(e) => handleInputChange('surgeryDetails', e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );

  const renderHabitsSection = () => (
    <div className="bg-white/10 border border-gray-300 rounded-lg p-6 mb-5">
      <div className="border-b border-gray-300 pb-4 mb-5">
        <h2 className="flex items-center gap-3 text-2xl font-['Poppins'] font-semibold">
          <i className="fas fa-mug-hot"></i> Hábitos de Vida
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Consumo de Álcool</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            onChange={(e) => handleInputChange('alcohol', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="none">Não consome</option>
            <option value="occasional">Ocasional</option>
            <option value="moderate">Moderado</option>
            <option value="frequent">Frequente</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Tabagismo</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            onChange={(e) => handleInputChange('smoking', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="non-smoker">Não fumante</option>
            <option value="former-smoker">Ex-fumante</option>
            <option value="regular">Fumante</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Prática de Exercícios</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            onChange={(e) => handleInputChange('exercise', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="sedentary">Sedentário</option>
            <option value="light">Leve (1-2x/semana)</option>
            <option value="moderate">Moderado (3-4x/semana)</option>
            <option value="intense">Intenso (5+x/semana)</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Qualidade do Sono</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            onChange={(e) => handleInputChange('sleep', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="excellent">Excelente</option>
            <option value="good">Boa</option>
            <option value="regular">Regular</option>
            <option value="poor">Ruim</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderFamilySection = () => (
    <div className="bg-white/10 border border-gray-300 rounded-lg p-6 mb-5">
      <div className="border-b border-gray-300 pb-4 mb-5">
        <h2 className="flex items-center gap-3 text-2xl font-['Poppins'] font-semibold">
          <i className="fas fa-users"></i> Histórico Familiar
        </h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Histórico de Calvície na Família</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('familyHistory', 'fatherBaldness', e.target.checked)} />
                Pai com calvície
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('familyHistory', 'motherBaldness', e.target.checked)} />
                Mãe com calvície
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('familyHistory', 'siblingsBaldness', e.target.checked)} />
                Irmãos com calvície
              </label>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('familyHistory', 'grandparentsBaldness', e.target.checked)} />
                Avós com calvície
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('familyHistory', 'noneFamily', e.target.checked)} />
                Nenhum histórico familiar
              </label>
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Detalhes do Histórico Familiar</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-md text-black min-h-[100px]"
            placeholder="Descreva detalhes sobre o histórico familiar de calvície, idade de início, etc."
            onChange={(e) => handleInputChange('familyDetails', e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );

  const renderTestsSection = () => (
    <div className="bg-white/10 border border-gray-300 rounded-lg p-6 mb-5">
      <div className="border-b border-gray-300 pb-4 mb-5">
        <h2 className="flex items-center gap-3 text-2xl font-['Poppins'] font-semibold">
          <i className="fas fa-microscope"></i> Testes Tricológicos
        </h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Testes Realizados</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('tests', 'pullTest', e.target.checked)} />
                Teste de Tração Leve (Pull Test)
                <i className="fas fa-info-circle text-[#6BD6B1] cursor-pointer ml-2" onClick={() => setShowPullTestPopup(true)}></i>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('tests', 'cardTest', e.target.checked)} />
                Card Test
                <i className="fas fa-info-circle text-[#6BD6B1] cursor-pointer ml-2" onClick={() => setShowCardTestPopup(true)}></i>
              </label>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('tests', 'tugTest', e.target.checked)} />
                Teste da Puxada (Tug Test)
                <i className="fas fa-info-circle text-[#6BD6B1] cursor-pointer ml-2" onClick={() => setShowTugTestPopup(true)}></i>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="cursor-pointer" onChange={(e) => handleNestedInputChange('tests', 'washTest', e.target.checked)} />
                Teste da Lavagem (Wash Test)
                <i className="fas fa-info-circle text-[#6BD6B1] cursor-pointer ml-2" onClick={() => setShowWashTestPopup(true)}></i>
              </label>
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Resultados dos Testes</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-md text-black min-h-[100px]"
            placeholder="Descreva os resultados dos testes realizados"
            onChange={(e) => handleInputChange('testResults', e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );

  const renderObservationsSection = () => (
    <div className="bg-white/10 border border-gray-300 rounded-lg p-6 mb-5">
      <div className="border-b border-gray-300 pb-4 mb-5">
        <h2 className="flex items-center gap-3 text-2xl font-['Poppins'] font-semibold">
          <i className="fas fa-notes-medical"></i> Observações Finais
        </h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Observações Adicionais</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-md text-black min-h-[150px]"
            placeholder="Adicione qualquer observação adicional relevante para a anamnese"
            onChange={(e) => handleInputChange('observations', e.target.value)}
          ></textarea>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-[#F5F7FA]">Objetivos do Tratamento</label>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-md text-black min-h-[100px]"
            placeholder="Descreva os objetivos esperados com o tratamento"
            onChange={(e) => handleInputChange('treatmentGoals', e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );

  const renderCurrentSection = () => {
    switch (sections[currentSection].id) {
      case 'personal': return renderPersonalSection();
      case 'complaint': return renderComplaintSection();
      case 'clinical': return renderClinicalSection();
      case 'treatments': return renderTreatmentsSection();
      case 'health': return renderHealthSection();
      case 'habits': return renderHabitsSection();
      case 'family': return renderFamilySection();
      case 'tests': return renderTestsSection();
      case 'observations': return renderObservationsSection();
      default: return renderPersonalSection();
    }
  };

  const PopupModal = ({ show, onClose, title, children }) => {
    if (!show) return null;
    
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
        <div className="bg-[#F5F7FA] text-black rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-3">
            <h2 className="text-xl font-['Poppins'] font-semibold text-[#2A5C8B]">{title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-black text-2xl"
            >
              ×
            </button>
          </div>
          <div className="text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen font-['Open_Sans'] text-white"
         style={{
           backgroundImage: `url(${backgroundImage})`,
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center',
           backgroundSize: 'cover'
         }}>
      
      <div className="max-w-7xl mx-auto p-5">
        {/* Header */}
        <header className="mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-3 text-center">
              <img src={logoImage} alt="Logo TricoLog" className="max-w-[130px] h-auto mx-auto" />
            </div>
            
            <div className="lg:col-span-6 text-center">
              <h1 className="text-2xl lg:text-3xl font-['Poppins'] font-semibold mb-2 flex items-center justify-center gap-3">
                Anamnese Capilar
                <i className="fas fa-info-circle text-[#6BD6B1] cursor-pointer text-xl" onClick={() => setShowInfoPopup(true)}></i>
              </h1>
              <p className="text-white">Do couro cabeludo à solução: análise completa em um só lugar.</p>
            </div>
            
            <div className="lg:col-span-3">
              <div className="text-right">
                <span className="block text-sm font-bold text-[#2A5C8B] mb-1">
                  Progresso da Anamnese: {updateProgress()}%
                </span>
                <div className="w-full h-5 bg-gray-300 rounded-md overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] transition-all duration-300"
                    style={{ width: `${updateProgress()}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="rounded-lg p-5 shadow-lg min-h-[500px]"
                 style={{
                   backgroundImage: `url(${sidebarImage})`,
                   backgroundRepeat: 'no-repeat',
                   backgroundSize: 'cover'
                 }}>
              <div className="p-5 border border-gray-300 rounded-lg">
                <nav>
                  <ul className="space-y-3">
                    {sections.map((section, index) => (
                      <li key={section.id}>
                        <button
                          onClick={() => goToSection(index)}
                          className={`flex items-center gap-3 p-3 rounded-lg w-full text-left transition-all ${
                            currentSection === index
                              ? 'bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-white shadow-lg'
                              : 'text-white/80 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <i className={`${section.icon} w-5 text-center`}></i>
                          <span className="text-sm">{section.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Form */}
          <main className="lg:col-span-8">
            <div className="rounded-lg p-5 shadow-lg min-h-[500px]"
                 style={{
                   backgroundImage: `url(${formBackgroundImage})`,
                   backgroundRepeat: 'no-repeat',
                   backgroundSize: 'cover'
                 }}>
              
              <form>
                {renderCurrentSection()}

                {/* Form Actions */}
                <div className="flex justify-between items-center mt-8">
                  <button
                    type="button"
                    onClick={prevSection}
                    className={`flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-white font-semibold rounded-md hover:opacity-90 transition-all ${
                      currentSection === 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={currentSection === 0}
                  >
                    <i className="fas fa-arrow-left"></i> Anterior
                  </button>
                  
                  {currentSection < sections.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextSection}
                      className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-white font-semibold rounded-md hover:opacity-90 transition-all"
                    >
                      Próximo <i className="fas fa-arrow-right"></i>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#6BD6B1] to-[#B8A1C9] text-white font-semibold rounded-md hover:opacity-90 transition-all"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log('Anamnese Data:', anamnesisData);
                        alert('Anamnese salva com sucesso!');
                      }}
                    >
                      <i className="fas fa-save"></i> Salvar Anamnese
                    </button>
                  )}
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>

      {/* Popups */}
      <PopupModal show={showInfoPopup} onClose={() => setShowInfoPopup(false)} title="ANAMNESE">
        <p><strong>Objetivo:</strong> Coletar histórico do paciente, incluindo queixa principal, hábitos, tratamentos anteriores e histórico familiar.</p>
        <p><strong>Dados relevantes:</strong></p>
        <ul className="list-disc ml-5 mb-4">
          <li>Queda acentuada (suspeita de Eflúvio Telógeno).</li>
          <li>Afinamento progressivo (suspeita de Alopecia Androgenética).</li>
          <li>Sintomas inflamatórios (coceira, dor, descamação).</li>
        </ul>
        <p className="text-xs text-gray-600 text-right">
          Fonte: Harrison, S., & Sinclair, R. (2002). Telogen effluvium. Clinical and Experimental Dermatology, 27(5), 389-395.
        </p>
      </PopupModal>

      <PopupModal show={showPullTestPopup} onClose={() => setShowPullTestPopup(false)} title="2. TESTE DE TRAÇÃO LEVE (PULL TEST)">
        <p><strong>Como fazer:</strong></p>
        <ul className="list-disc ml-5 mb-4">
          <li>Paciente deve estar sem lavar o cabelo por 24h.</li>
          <li>Tração leve de 50 fios em 4 áreas (temporal, occipital, vértex).</li>
          <li><strong>Contar fios soltos:</strong>
            <ul className="list-disc ml-5">
              <li>Normal: 4-5 fios.</li>
              <li>Eflúvio Telógeno (ET): 8-10 fios.</li>
              <li>Alopecia Areata Incógnita: "mão cheia" de fios.</li>
            </ul>
          </li>
        </ul>
        <p><strong>Interpretação:</strong></p>
        <ul className="list-disc ml-5 mb-4">
          <li>Bulbo branco: fio em fase telógena.</li>
          <li>Bulbo preto: fio em fase anágena (queda patológica).</li>
        </ul>
        <p className="text-xs text-gray-600 text-right">
          Fonte: Shapiro, J. (2007). Clinical practice: Hair loss in women. New England Journal of Medicine, 357(16), 1620-1630.
        </p>
      </PopupModal>

      <PopupModal show={showCardTestPopup} onClose={() => setShowCardTestPopup(false)} title="CARD TEST">
        <p><strong>Objetivo:</strong> Diferenciar fios novos (crescimento) de fios quebrados (dano na haste).</p>
        <p><strong>Método:</strong> Usar papel branco (cabelos escuros) ou preto (cabelos claros) para visualizar os fios.</p>
        <p className="text-xs text-gray-600 text-right mt-4">
          Fonte: Mirmirani, P. (2011). Ceramic flat irons: Improper use leading to acquired trichorrhexis nodosa. Journal of the American Academy of Dermatology, 64(4), 769-770.
        </p>
      </PopupModal>

      <PopupModal show={showTugTestPopup} onClose={() => setShowTugTestPopup(false)} title="TESTE DA PUXADA (TUG TEST)">
        <p><strong>Objetivo:</strong> Avaliar fragilidade da haste capilar.</p>
        <p><strong>Como fazer:</strong></p>
        <ul className="list-disc ml-5 mb-4">
          <li>Segurar uma mecha de 50 fios.</li>
          <li>Deslizar os dedos da ponta até a raiz.</li>
          <li>Fios quebradiços indicam danos químicos ou mecânicos.</li>
        </ul>
        <p className="text-xs text-gray-600 text-right">
          Fonte: Gavazzoni Dias, M. F. (2015). Hair cosmetics: An overview. International Journal of Trichology, 7(1), 2-15.
        </p>
      </PopupModal>

      <PopupModal show={showWashTestPopup} onClose={() => setShowWashTestPopup(false)} title="TESTE DA LAVAGEM (WASH TEST)">
        <p><strong>Objetivo:</strong> Diferenciar Alopecia Androgenética (AAG) de Eflúvio Telógeno Crônico.</p>
        <p><strong>Método:</strong></p>
        <ul className="list-disc ml-5 mb-4">
          <li>Paciente fica 4 dias sem lavar o cabelo.</li>
          <li>Lavar com shampoo (sem condicionador) e coletar fios em uma gaze.</li>
          <li>Separar fios curtos (&lt;3 cm = velus) e longos.</li>
        </ul>
        <p><strong>Interpretação:</strong></p>
        <ul className="list-disc ml-5 mb-4">
          <li>10% fios velus = AAG.</li>
          <li>100 fios totais + velus = AAG + ET.</li>
        </ul>
        <p className="text-xs text-gray-600 text-right">
          Fonte: Blume-Peytavi, U., et al. (2011). Hair growth assessment techniques. Journal of Investigative Dermatology Symposium Proceedings, 15(1), 23-27.
        </p>
      </PopupModal>

      <PopupModal show={showMinoxidilPopup} onClose={() => setShowMinoxidilPopup(false)} title="MINOXIDIL TÓPICO">
        <div className="space-y-4">
          <p><strong>Ficha Técnica Clínico-Tricológica</strong></p>
          <p><strong>Classe farmacológica:</strong> Vasodilatador periférico</p>
          <p><strong>Formulações comuns:</strong> 2%, 5%, soluções hidroalcoólicas ou espuma</p>
          
          <div>
            <p><strong>Indicação principal:</strong></p>
            <ul className="list-disc ml-5">
              <li>Alopecia androgenética masculina e feminina</li>
            </ul>
          </div>
          
          <div>
            <p><strong>Indicações adicionais (off-label):</strong></p>
            <ul className="list-disc ml-5">
              <li>Eflúvio telógeno crônico</li>
              <li>Alopecia areata (em associação a outras terapias)</li>
              <li>Apoio em alopecias cicatriciais estabilizadas</li>
            </ul>
          </div>
          
          <p><strong>Via de uso:</strong> Tópica, no couro cabeludo, geralmente 1 a 2 vezes ao dia</p>
          <p><strong>Segurança:</strong> Efeitos adversos mais comuns — irritação, descamação, eritema, prurido, hipertricose em áreas adjacentes</p>
          
          <div>
            <p><strong>Mecanismos de ação:</strong></p>
            <ul className="list-disc ml-5">
              <li>Vasodilatação local → Aumenta fluxo sanguíneo e aporte de nutrientes ao folículo</li>
              <li>Abertura de canais de potássio (K⁺-ATP) → Ativa fatores de crescimento folicular</li>
              <li>Prolongamento da fase anágena → Mantém o fio em crescimento por mais tempo</li>
              <li>Aumento de espessura e densidade → Reverte parcialmente a miniaturização folicular</li>
              <li>Estimulação da papila dérmica → Favorece proliferação celular e inibe apoptose precoce</li>
            </ul>
          </div>
          
          <p className="text-xs text-gray-600 text-right">
            Fontes: Olsen EA et al. A multicenter, randomized, placebo-controlled, double-blind clinical trial of topical minoxidil in the treatment of androgenetic alopecia in women. J Am Acad Dermatol. 2002;47(5):767-774.
          </p>
        </div>
      </PopupModal>

      <PopupModal show={showFinasteridePopup} onClose={() => setShowFinasteridePopup(false)} title="FINASTERIDA">
        <div className="space-y-4">
          <p><strong>Ficha Técnica Clínico-Tricológica (Tópica e Injetável)</strong></p>
          
          <div>
            <p><strong>Identificação</strong></p>
            <ul className="list-disc ml-5">
              <li><strong>Classe farmacológica:</strong> Inibidor seletivo da 5α-redutase tipo II</li>
              <li><strong>Indicação principal em tricologia:</strong> Alopecia androgenética masculina e feminina (off-label no caso feminino)</li>
              <li><strong>Mecanismo geral:</strong> Reduz a conversão da testosterona em dihidrotestosterona (DHT), hormônio envolvido na miniaturização folicular</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#3D7CB8] border-b border-gray-300 pb-1">1. Finasterida Tópica</h3>
            <ul className="list-disc ml-5">
              <li><strong>Apresentação:</strong> Loções, soluções hidroalcoólicas ou oleosas, isolada ou associada a minoxidil</li>
              <li><strong>Concentrações comuns:</strong> 0,025% a 0,1%</li>
              <li><strong>Posologia usual:</strong> Aplicar 1x/dia no couro cabeludo (dose média absorvida: 0,2–0,6 mg/dia)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#3D7CB8] border-b border-gray-300 pb-1">2. Finasterida Injetável (uso experimental/off-label)</h3>
            <ul className="list-disc ml-5">
              <li><strong>Apresentação:</strong> Solução estéril manipulada para microinjeções intradérmicas no couro cabeludo</li>
              <li><strong>Concentrações comuns em estudos:</strong> 0,025% a 0,1% (ajustada por protocolo)</li>
              <li><strong>Posologia usual experimental:</strong> Aplicações mensais ou bimestrais, conforme protocolo clínico</li>
            </ul>
          </div>
          
          <p className="text-xs text-gray-600 text-right">
            Fontes: Rossi A et al. Comparative effectiveness of topical finasteride in male androgenetic alopecia: a randomized clinical trial. Dermatol Ther. 2020;33(6):e14120.
          </p>
        </div>
      </PopupModal>
    </div>
  );
};

export default Anamnese;

