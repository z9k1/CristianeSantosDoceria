import type { Metadata } from "next";
import { brandSettings } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Política de Privacidade"
};

export default function PrivacyPage() {
  return (
    <div className="container-pad py-14">
      <article className="rounded-lg border border-rose-100 bg-white p-8 shadow-soft">
        <h1 className="font-serifBrand text-3xl text-cocoa-800">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-cocoa-700">
          A sua privacidade é importante para nós. Esta política explica como as informações são tratadas neste site.
        </p>
        <div className="mt-8 space-y-6 text-sm text-cocoa-700">
          <section>
            <h2 className="text-lg font-semibold text-cocoa-800">1. Coleta de informações</h2>
            <p className="mt-2">
              Este site pode solicitar algumas informações básicas, como nome e dados do pedido, para facilitar o atendimento e a realização de encomendas.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-cocoa-800">2. Uso das informações</h2>
            <p className="mt-2">
              As informações fornecidas são utilizadas exclusivamente para atendimento ao cliente, organização de pedidos e comunicação relacionada às encomendas.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-cocoa-800">3. Compartilhamento de dados</h2>
            <p className="mt-2">Nenhuma informação pessoal é vendida ou compartilhada com terceiros.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-cocoa-800">4. Comunicação via WhatsApp</h2>
            <p className="mt-2">
              Os pedidos são finalizados por meio do WhatsApp. As informações enviadas são utilizadas apenas para atendimento e confirmação do pedido.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-cocoa-800">5. Segurança</h2>
            <p className="mt-2">
              Buscamos adotar boas práticas para proteger as informações fornecidas pelos usuários.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-cocoa-800">6. Alterações nesta política</h2>
            <p className="mt-2">
              Esta política pode ser atualizada a qualquer momento para melhorar a transparência sobre o uso das informações.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-cocoa-800">7. Contato</h2>
            <p className="mt-2">
              Em caso de dúvidas sobre esta política de privacidade, entre em contato através do WhatsApp da confeitaria:{" "}
              <a
                href={`https://wa.me/${brandSettings.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cocoa-800 underline"
              >
                {brandSettings.phoneDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
